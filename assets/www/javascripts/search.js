function ComprehensiveSearch() {
    GetTo.call(this);
    _thisSearch_ = this;
}
inheritPrototype(ComprehensiveSearch, GetTo)

ComprehensiveSearch.prototype.self = {
    checkValue: function () {
        if ($("#keyword").val() != "" && $("#domain").val() != "") {
            return true
        }
        return false
    },
    bindclickEvent: function () {
        $("#button").bind("tap", function () {
            if (_thisSearch_.self.checkValue() == true) {
                switch ($("#domain").val()) {
                    case "domains":
                        _thisSearch_.self.processing( "posts", "news_list_url", "news_list.html")
                        break
                    case "enterprises":
                        _thisSearch_.self.processing( "enterprises", "enterprises_list_url", "enterprises_list.html")
                        break
                    case "technologies":
                        _thisSearch_.self.processing( "technologies", "technologies_list_url", "technologies_list.html")
                        break
                    case "products":
                        _thisSearch_.self.processing( "products", "products_list_url", "products_list.html")
                        break
                    case "industries":
                        _thisSearch_.self.processing( "posts", "industries_list_url", "industries_list.html")
                        break
                }
            }else{
                _thisSearch_.popupMessage("请输入关键字并选择信息所属种类")
            }
        })

    },
    processing: function ( responseKeyname, urlKeyName, pageName) {
        _thisSearch_.data = $("#search").serialize()
        localStorage.setItem("PullParams",_thisSearch_.data)
        localStorage.getItem("PullParams")
        _thisSearch_.send(getRootPath() + "api/search")
        if (_thisSearch_.getResponse().length != 0 &&_thisSearch_.getResponse()!= "error") {
            console.log(_thisSearch_.getResponse())
            _thisSearch_.saveResponseTo(responseKeyname)
             localStorage.setItem(urlKeyName,"api/search")
            _thisSearch_.jumpTo(pageName)
        }else{
            _thisSearch_.popupMessage("没有搜索到任何东西")
        }
    }

}