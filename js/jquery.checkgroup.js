(function($) {
    var CheckGroup = function(options, el) {
        this.$el = $(el);
        this.options = $.extend({}, this.options, options);
        this.init();
    };

    CheckGroup.prototype = {
        constructor: CheckGroup,

        options: {
            preventEmpty: true,
            selectMode: 'os',
            checkedClass: 'checked'
        },

        init: function() {
            this.$el.on('click', 'input', $.proxy(this, '_onInputChange'));
        },

        _onInputChange: function(evt) {
            var $input = $(evt.target); 
            this.select({
                event: evt,
                $input: $input,
                $label: $input.parent(),
                checked: !evt.target.checked,
                ctrlKey: evt.ctrlKey,
                shiftKey: evt.shiftKey
            });
        },
        
        _normalizeCmd: function(cmd) {
            var option = cmd.option;
            
            if(option == undefined || option == null) return;
            
            if(typeof option === 'number') {
                cmd.$label = this.$el.children().eq(option);
                cmd.$input = cmd.$label.find('input');
            } else {
                cmd.$input = this.$el.find('input[value='+option+']').eq(0);
                cmd.$label = cmd.$input.parent();
            }
            
            cmd.checked = cmd.$input.prop('checked');
        },
        
        select: function(cmd) {
            var selectMode = this.options.selectMode;
            
            this._normalizeCmd(cmd);
            
            selectMode === 'os'     ?   this._selectOS(cmd) :
            selectMode === 'single' ?   this._selectSingle(cmd) :
                                        this._selectMulti(cmd);
        },

        _selectSingle: function(cmd) {
            this._set(cmd.$label.siblings(), false);
            if(cmd.checked) {
                if(this.options.preventEmpty){
                    cmd.event && cmd.event.preventDefault();
                    return;
                }
                this._set(cmd.$label, false);
            } else {
                this._set(cmd.$label, true);
            }
            
            if(!cmd.event)cmd.$input.change();
        },
        
        _selectMulti: function(cmd) {
            if(cmd.checked) {
                if(this.options.preventEmpty) {
                    var notEmpty = cmd.$label.siblings().hasClass(this.options.checkedClass);
                    if(!notEmpty) {
                        cmd.event && cmd.event.preventDefault();
                        return;
                    }
                }
                this._set(cmd.$label, false);
            }
            else {
                this._set(cmd.$label, true);
                if(cmd.$label.attr('data-checkgroup-all') != undefined) {
                    this._set(cmd.$label.siblings(), false);
                }
                else {
                    this._set(cmd.$label.siblings('[data-checkgroup-all]'), false);
                }
            }
            if(!cmd.event)cmd.$input.change();
        },
        
        _selectOS: function(cmd) {
            cmd.ctrlKey ? this._selectMulti(cmd) : this._selectSingle(cmd);
        },

        _set: function($label, checked) {
            $label.toggleClass(this.options.checkedClass, checked);
            $label.find('input').prop('checked', checked);
        }
    };

    $.fn.checkgroup = function(options) {
        var retValue = this;
        
        if(typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            
            this.each(function(){
                var methodValue;
                var inst = $.data(this, 'checkgroup');
                if(!inst) {
                    throw new Error("cannot call method " + options +
                        " prior to initialization.");
                }

                methodValue = inst[options].apply(inst, args);
                if(methodValue && methodValue!= inst) {
                    retValue = methodValue;
                    return false;
                }
            });
            
        } else {
            this.each(function() {
                var inst = $.data(this, 'checkgroup');
                if (!inst) {
                    $.data(this, 'checkgroup', new CheckGroup(options, this));
                }
            });
        }
        
        return retValue;
    };
    
    $.fn.checkgroup.defaults = CheckGroup.prototype.options;
}(jQuery));
