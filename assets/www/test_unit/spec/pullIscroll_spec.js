describe("����ˢ�²���", function () {

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = '../';
        loadFixtures('news_list.html')
        localStorage.setItem("url", "http://0.0.0.0:3000/")

    })
    afterEach(function () {
        localStorage.clear();
    })
    it("��ȡҳ��Զ�����ӵ�ַ", function () {
        var pullObj = new PullLoad();
        expect(pullObj.self.getPath("#pullAjaxUrl")).toBe("api/domains/1?posts_page=2")
    })
    it("��ǰ����ΪĬ�ϵġ�2��ʱ���޸ĵ�ǰ��ҳ�����Ϊ2", function () {
        var pullObj = new PullLoad();
        spyOn(pullObj, 'send');
        spyOn(pullObj, "getResponse").andReturn(new Array("red"))
        pullObj.self.send();
        expect($("#pullAjaxUrl").attr("data-page")).toBe("2")
    })
    it("��ǰ��ҳ��Ϊ1ʱ���޸ĵ�ǰҳ�����Ϊ2", function () {
        var pullObj = new PullLoad();
        spyOn(pullObj, 'send');
        spyOn(pullObj, "getResponse").andReturn(new Array("red"));
        pullObj.num = 1;
        pullObj.self.send();
        expect($("#pullAjaxUrl").attr("data-page")).toBe("2")

    })

})