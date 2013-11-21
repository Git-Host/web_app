//��Ҫ�����첽�������ݣ��������Ϊ�������˵�ַ����Ҫ���и��ڵ㣩
function sendToServer(url) {
    var path = getRootPath() + url;
    $.ajax({
        type: "GET",
        url: path,
        crossDomain: true,
        beforeSend: showLoader(),
        complete: function () {
            $.mobile.loading('hide')
        },
        data: {},
        dataType: 'json',
        success: function (response) {
            hideLoader();
            callBack(response,url);
        },
        error: function () {
            alert('������...���ӳ������⣬�����������');
        }
    });
};
//�첽���ͳɹ���ص�����������Ϊ���صĽ��
function callBack(response,url) {
    var thermeObj = $("#news-theme");
    var pageObj = $("[data-role='page']");
    thermeObj.hide();
    pageObj.append(buildHtml(response,url));
    $(".news-content").trigger("create")
    $('.news-list').listview('refresh');
    addButton('[data-role="header"]', "����", "hideAction('.addButton','#news-theme','.news-content')");
    bindContainer(".news-content");
};
//���͵�ַ�ĸ���ַ�����ؽ��Ϊ��ַ���ַ���
function getRootPath() {
    return "http://192.168.0.251:3000/"
};
//������Ҫ�����HTML�ַ���
function buildHtml(response,url) {
    var htmlCache = "";
    var newsContent;
    $.each(response, function (n, value) {
        newsContent = "<li><h3>" + value.title + "</h3>" + "<p>" + value.content + "</p></li>";
        newsContent = newsContent + htmlCache;
        htmlCache = newsContent;
    });
    return '<div data-role="content" class="news-content">' + '<ul data-role="listview" class="news-list">' + newsContent + '</ul>';
};

function addButton(document, buttonName, callfunctionName) {
    $(document).append('<a  data-mini="true" class="addButton ui-btn-right" data-icon="forward" onclick="' + callfunctionName + '" >' + buttonName + '</a>')
    $('.addButton').button();
}

function hideAction(buttonElement, showElement, hideElement) {
    $(buttonElement).hide();
    $(showElement).show();
    $(hideElement).hide();
};
