function showLoader() {

    //��ʾ������.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        textVisible: true, //ֻ��ʾ�ֵ�����
        theme: 'b',        //������
        html: " <a onclick='hideLoader()'  data-icon='delete' data-role='button' class='stopLoader' style='display: none;' >������....���ȡ��</a>"         //Ҫ��ʾ��html���ݣ���ͼƬ��
    })
    $('a.stopLoader').show();
};
function hideLoader() {
    //���ؼ�����
    $.mobile.loading('hide');
};


function jsonToString(jsonObj) {
    return JSON.stringify(jsonObj);
};
function stirngToJson(string) {
    return eval('(' + string + ')');
}

function sessionToJson(session) {
//    sessionStorage.clear();
    return stirngToJson(session);
}

function showSimpleLoad(){
    $.mobile.loading('show',{
        textVisible: true,
        text: "������",
        textonly: false,
        theme: "c"
    })
}
function onPullDown() {
    showSimpleLoad()
    var url = $("#pullAjaxUrl").attr("href") + "1";
    $.getJSON(getRootPath()+url,function(response){
        $("[data-role='listview']").empty();
        $("[data-role='listview']").append(buildHtml(response));
        $(".news-content").trigger("create")
        $('.news-list').listview('refresh');
        $("#pullAjaxUrl").attr("data-page","1")
        hideLoader();
        bindLink("a.ui-link");
    });

};
function onPullUp() {
    showSimpleLoad();
 var url = editPath( $("#pullAjaxUrl"));
    $.getJSON(getRootPath()+url ,function(response){
        $("[data-role='listview']").append(buildHtml(response));
        $(".news-content").trigger("create")
        $('.news-list').listview('refresh');
        hideLoader();
        bindLink("a.ui-link");
    });

};
function editPath(docObj){
 var pageNumber= docObj.attr("data-page");
     pageNumber =  new Number(pageNumber) + 1 ;
     docObj.attr("data-page",pageNumber);
     return docObj.attr("href") + pageNumber;
}


