describe("����ˢ�²���",function(){
    beforeEach(function(){
        var testData={

        };
        $("#pullAjaxUrl")
         pullObj = new PullLoad();
        spyOn(pullObj,'send')
        spyOn(pullObj,'getResponse').andReturn(testData)
    })
    it("��������ʱ,���ȡ������,����Ⱦҳ��",function(){
        expect(pullObj)
    })
})