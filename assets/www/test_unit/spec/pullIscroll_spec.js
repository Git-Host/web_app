
describe("����ˢ�²���",function(){

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = '../';
        loadFixtures('news_list.html')
        localStorage.setItem("url","http://0.0.0.0:3000/")
    })
    it("��ȡҳ��Զ�����ӵ�ַ",function(){
        var pullObj = new PullLoad();
        expect(pullObj.self.getPath("#pullAjaxUrl")).toBe("api/domains/1?posts_page=2")
    })

})