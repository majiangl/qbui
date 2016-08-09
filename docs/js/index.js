(function(){
    $(function(){
        $('#date').datepicker({
            language: "zh-CN",
            autoclose: true,
            todayHighlight: true,
            daysOfWeekHighlighted: "0,6"
        });
        
        $("#chosen").chosen({
            width: '200px',
            disable_search: true
        });
        
        var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
        $( "#ac" ).autocomplete({
          source: availableTags,
          autoFocus: true
        });
        
        $('#checks input').iCheck();
        
        $('#tabGroup').tab();
        
        $('#checkGroup').checkgroup();
        
        $('#qtipText').qtip();
        
        $( "#sortableList" ).sortable();
        
        $('#table').dataTable({
            searching: false,
            lengthChange: false,
            info: false,
            scrollX: true,
            columnDefs: [{
                targets: [0,1,2,3,4], className: 'dt-head-left dt-body-left'
            },{
                targets: [5], className: 'dt-head-right dt-body-right'
            }],
            language: {
                paginate: {
                    previous: '',
                    next: ''
                }
            }
        });
    });
}());