function Rendering() {
    _thisSetConfig_ = this;
}
Rendering.prototype.htmlTemplate = {
    news_theme: function (obj) {
        return  '<li><a path="api/domains/' + obj.id + '/posts" data-storageKey="posts" pageTo="news_list.html">' + obj.name + '</a></li>';
    },
    industries_theme: function (obj) {
        return '<li><a data-storageKey="posts" pageTo="industries_list.html" path="api/industries/' + obj.id + '/posts">' + obj.name + '</a></li>';
    },
    industries_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='post' pageTo='industries_show.html' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.logo + "'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    products_list: function (obj) {
        return  "<li><a  data-ajax='false' data-storageKey='product' pageTo='product_show.html' path='api/products/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.image_url + "'><h3>"
            + obj.name + "</h3>" + "<p>�۸�:&nbsp;&nbsp;" + obj.price + "</p>" + "<p>˵��:&nbsp;&nbsp;" + obj.description + "</p></a></li>";
    },
    products_theme: function (obj) {
        return '<li><a data-ajax="false" data-storageKey="products" pageTo="products_list.html" path="api/industries/' + obj.id + '/products">' + obj.name + '</a></li>';
    },
    news_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='post' pageTo='news_show.html' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.logo + "'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    enterprises_theme: function (obj) {
        return '<li><a data-ajax="false" data-storageKey="enterprise" pageTo="enterprises_list.html"  path="api/industries/' + obj.id + '/enterprises">' + obj.name + '</a></li>';
    },
    enterprises_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='company' pageTo='enterprise_show.html' path='api/enterprises/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.image_url + "'><h3>"
            + obj.name + "</h3>" + "<p>�����ַ:&nbsp;&nbsp;" + obj.email + "</p><p>�绰����:&nbsp;&nbsp;" + obj.tel + "</p><p>˵��:&nbsp;&nbsp;" + obj.description + "</p></a></li>"
    },
    enterprises_show: function (obj) {
        console.log(obj.description)
        return "<div class='image'><a href='#'><img id='avatar' style='width:100%; ' src="+ getRootPath() + obj.image_url +" ></a>" +
            "<div class='content'><h2>��˾��Ϣ</h2><table>"+
            "<tr><th>����:</th><td>" + obj.name + "</td></tr>" +
            "<tr><th>�绰:</th><td>" + obj.tel + "</td></tr>" +
            "<tr><th>����:</th><td>" + obj.email + "</td></tr>" +
            "<tr><th>��ַ:</th><td>" + obj.address + "</td></tr>" +
            "</table><div class='description' style=''><h2>��˾���</h2><p>"+obj.description+"</p></div>" +
            "<div class='products_list'><h2>��˾��Ʒ</h2><a data-theme='c' ></div>" +
            "</div>" +
            "</div>"
    }
}