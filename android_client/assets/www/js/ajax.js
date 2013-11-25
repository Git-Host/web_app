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
            callBack(response, path);
        },
        error: function () {
            alert('������...���ӳ������⣬�����������');
        }
    });
};
//�첽���ͳɹ���ص�����������Ϊ���صĽ��
function callBack(response, url) {
    sessionStorage.setItem("posts",jsonToString(response));
    window.location.href="news_list.html";
};
//���͵�ַ�ĸ���ַ�����ؽ��Ϊ��ַ���ַ���
function getRootPath() {
    return "http://192.168.0.251:3000/"
};
//������Ҫ�����HTML�ַ���
function buildHtml(response) {
    var htmlCache = "";
    var newsContent;
    $.each(response, function (n, value) {
        newsContent = "<li><img src="+ value.logo +" class='ul-li-icon'><h3><a href='"+getRootPath()+"api/posts/"+ value.id + "'>" + value.title + "</a></h3>" + "<p>" + value.content + "</p></li>";
        newsContent = newsContent + htmlCache;
        htmlCache = newsContent;
    });
    return newsContent;
};


function hideAction(buttonElement, showElement,removeElement) {
    $(buttonElement).remove();
    $(showElement).show();
    $(removeElement).remove();
};
