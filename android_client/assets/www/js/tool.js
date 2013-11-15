$(document).bind("mobileinit", function () {
    $.extend($.mobile, {
        defaultPageTransition: 'slidefade'
    });
    $.mobile.transitionFallbacks.slideout = "none"
    $.mobile.defaultPageTransition = 'slidefade';
    $.mobile.defaultDialogTransition = 'slidefade';
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    //�ر�DOM Cache�����ڴ�����
    $.mobile.page.prototype.options.domCache = false;
    $.mobile.buttonMarkup.hoverDelay = true;
});
function showLoader(html) {

    //��ʾ������.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        text: '������...', //����������ʾ������
        textVisible: true, //�Ƿ���ʾ����
        theme: 'b',        //������������ʽa-e
        textonly: false,   //�Ƿ�ֻ��ʾ����
        html: " <a onclick='hideLoader()'  data-icon='delete' data-role='button' class='stopLoader' style='display: none;' >������.....ֹͣ������</a>"         //Ҫ��ʾ��html���ݣ���ͼƬ��
    })
    $('a.stopLoader').show();
};
function hideLoader()
{
    //���ؼ�����
    $.mobile.loading('hide');
}
