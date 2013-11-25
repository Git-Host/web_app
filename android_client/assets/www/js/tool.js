$(document).bind("mobileinit", function () {
    $.extend($.mobile, {
        defaultPageTransition: 'slidefade'
    });
    $.mobile.transitionFallbacks.slideout = "none"
    $.mobile.defaultPageTransition = 'slidefade';
    $.mobile.defaultDialogTransition = 'slidefade';
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    //�ر�DOM Cache�����ڴ����?    $.mobile.page.prototype.options.domCache = false;
    $.mobile.buttonMarkup.hoverDelay = true;
    $.mobile.loadingMessage = "������";
    $.mobile.pageLoadErrorMessage = '������';
//    $.mobile.ajaxEnabled=false;

});
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
function bindLink(doc) {
    $(doc).each(
        function () {
            $(this).bind("tap", function () {
                    sendToServer($(this).attr("path"));
                }
            )
        })
};

function jsonToString(jsonObj) {
    return JSON.stringify(jsonObj);
};
function stirngToJson(string) {
    return eval('(' + string + ')');
}

function sessionToJson(session) {
    sessionStorage.clear();
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
    });

};
function onPullUp() {
    showSimpleLoad();
 var url = addOneUrl( $("#pullAjaxUrl"));
    $.getJSON(getRootPath()+url ,function(response){
        $("[data-role='listview']").append(buildHtml(response));
        $(".news-content").trigger("create")
        $('.news-list').listview('refresh');
        hideLoader();
    });

};
function addOneUrl(docObj){
 var pageNumber= docObj.attr("data-page");
     pageNumber =  new Number(pageNumber) + 1 ;
     docObj.attr("data-page",pageNumber);
     return docObj.attr("href") + pageNumber;
}


