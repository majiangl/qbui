(function(){
    $(function(){
        $('#date,#date1,#date2').datepicker({
            language: "zh-CN",
            autoclose: true,
            todayHighlight: true,
            daysOfWeekHighlighted: "0,6"
        });
        
        $('#date2').on('changeDate', function(evt){
            alert('Event changeDate triggered');
        });
        
        $('#date1Btn1').click(function(){
            var d = $('#date1').datepicker('getDate');
            alert(d);
        });
        
        $('#date1Btn2').click(function(){
            $('#date1').datepicker('update', '2016-08-08');
        });
        
        $("#chosen, #chosen1, #chosen2").chosen({
            width: '200px',
            disable_search: true
        });
        
        $('#chosen1Btn1').click(function(){
            $('#chosen1').prop('disabled', true).trigger('chosen:updated');
        });
        
        $('#chosen1Btn2').click(function(){
            $('#chosen1').prop('disabled', false).trigger('chosen:updated');
        });
        
        $('#chosen2').change(function(evt, data){
            alert('Current selected: '+data.selected);
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
        
        $('#ac1').autocomplete({
            source: function(request, response){
                var item = 'You searched: '+request.term;
                response([item]);
            }
        });
        
        $('#ac2').autocomplete({
            source: availableTags,
            select: function(event, ui) {
                alert('select event triggered');
            }
        });
        
        $('#checks input').iCheck();
        
        $('#check1').iCheck();
        
        $('#check2').on('ifChecked', function(){
            alert('checked');
        }).iCheck();
        
        $('#check1Btn1').click(function(){
            $('#check1').iCheck('toggle');
        });
        
        $('#tabGroup, #tabGroup1, #tabGroup2').tab();
        
        $('#tg1Btn1').click(function(){
            $('#tabGroup1').tab('select', 2);
        });
        
        $('#tg1Btn2').click(function(){
            $('#tabGroup1').tab('select', 'tab13');
        });
        
        $('#tg1Btn3').click(function(){
            var id = $('#tabGroup1').tab('getSelectedId');
            alert("Selected id: "+id);
        });
        
        $('#tab22').on('show.tab', function(){
           alert('show.tab event triggered');
        });
        
        $('#tab23').on('hide.tab', function(){
            alert('hide.tab event prevented');
            return false;
        })
        
        $('#checkGroup').checkgroup();
        
        $('#checkGroup1').checkgroup({
            selectMode: 'single'
        });
        
        $('#checkGroup2').checkgroup({
            selectMode: 'multi'
        });
        
        $('#qtip').qtip();
        
        $('#qtip1').qtip({
            content: {
                text: 'This text is not from title'
            },
            show: 'click',
            position: {
                my: 'bottom left',
                at: 'top right'
            }
        });
        
        $('#qtip2').qtip({
            content: {
                text: function(event, api){
                    // send you ajax, call api.set in callback
                    setTimeout(function(){
                        api.set('content.text', 'Return from ajax');
                    }, 500);
                    
                    return 'Loading...';
                }
            }
        });
        
        $('#qtip3').qtip({
            content: {
                text: function(event, api){
                    // Return promise object to enable continuously load.
                    return $.ajax({
                        url: 'data/tooltip-ajax.json',
                        cache: false
                    })
                    .then(function(res){
                        // Return fetched text
                        return res.text;
                    });
                }
            }
        });
        
        $('#qtip4').on('mouseover', '.tooltip-delegate', function(evt){
            $(this).qtip({
                // Make sure the tooltip won't be overridden once created
                overwrite: false,
                content: "I'm delegated.",
                show: {
                    // Use the same show event as the one that triggered the event handler
                    event: event.type,
                    // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!
                    ready: true
                }
            }, event); // Pass through our original event to qTip
        });
        
        $( "#sortableList" ).sortable();
        
        $('#table').dataTable({
            searching: false,
            lengthChange: false,
            info: false,
            scrollX: true,
            ajax: 'data/datatable.json',
            columns: [
                {
                    data:'name',
                    title:'Name',
                    className: 'dt-head-left'
                },
                {
                    data:'position',
                    title:'Position',
                    className: 'dt-head-left'
                },
                {
                    data:'office',
                    title:'Office',
                    className: 'dt-head-left'
                },
                {
                    data:'extn',
                    title:'Extn.',
                    className: 'dt-head-right dt-body-right'
                },
                {
                    data:'start_date',
                    title:'Start date',
                    className: 'dt-head-right dt-body-right'
                },
                {
                    data:'salary',
                    title:'Salary',
                    className: 'dt-head-right dt-body-right'
                }
            ],
            language: {
                paginate: {
                    previous: '',
                    next: ''
                }
            }
        });
        
        $('#table1').dataTable({
            searching: false,
            lengthChange: false,
            info: false,
            paging: false,
            select: true,
            scrollX: true,
            scrollY: 400,
            ajax: 'data/datatable.json',
            columns: [
                {
                    data:'name',
                    title:'Name',
                    className: 'dt-head-left'
                },
                {
                    data:'position',
                    title:'Position',
                    className: 'dt-head-left'
                },
                {
                    data:'office',
                    title:'Office',
                    className: 'dt-head-left'
                },
                {
                    data:'extn',
                    title:'Extn.',
                    className: 'dt-head-right dt-body-right'
                },
                {
                    data:'start_date',
                    title:'Start date',
                    className: 'dt-head-right dt-body-right'
                },
                {
                    data:'salary',
                    title:'Salary',
                    className: 'dt-head-right dt-body-right'
                }
            ],
            language: {
                paginate: {
                    previous: '',
                    next: ''
                }
            }
        });
    });
}());