describe("����ˢ�²���",function(){

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = '../../';
        localStorage.setItem("url","http://0.0.0.0:3000/")
    })
    it("��ȡҳ��Զ�����ӵ�ַ",function(){

        loadFixtures('news_list.html')
        expect(pullObj.self.getPath()).toBe("http://0.0.0.0:3000")
    })

})