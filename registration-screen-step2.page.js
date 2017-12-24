var RegStep2Page = function () {
    
    this.v_required = lang_trans.error_field_required;
    this.v_zip_limit = lang_trans.error_zip_limit_char;
    this.v_zip = lang_trans.ZIPCODE_VALIDATION_MESSAGE;
    
    this.firstName = element(by.model('personalInfo.firstName'));
    this.lastName = element(by.model('personalInfo.lastName'));
    this.birthdate = element(by.model('personalInfo.birthdate'));
    this.gender = element(by.model('personalInfo.gender'));
    this.genderParent = element(by.model('personalInfo.gender')).all(by.xpath('..')).get(0);

    this.zipcodeParent = element(by.model('personalInfo.zipcode')).all(by.xpath('..')).get(0);
//    this.zipcode = element(by.id('registrationZip'));
    this.zipcode = element(by.model('personalInfo.zipcode'));
    this.city = element(by.model('personalInfo.city'));
    this.height = element(by.model('personalInfo.height'));
    this.weight = element(by.model('personalInfo.weight'));
    this.state = element(by.model('personalInfo.state'));
    this.stateParent = element(by.model('personalInfo.state')).all(by.xpath('..')).get(0);

    this.getStartedButton = element(by.buttonText(lang_trans.btn_get_started));

    this.firstNameError = element(by.css('[ng-messages="personalInfoForm.firstName.$error "] > .error'));

    this.lastNameError = element(by.css('[ng-messages="personalInfoForm.lastName.$error "] > .error'));

    this.birthdateError = element(by.css('[ng-messages="personalInfoForm.birthdate.$error "] > .error'));

    this.heightError = element(by.css('[ng-messages="personalInfoForm.height.$error "] > .error'));

    this.weightError = element(by.css('[ng-messages="personalInfoForm.weight.$error "] > .error'));

    this.genderError = element(by.css('[ng-messages="personalInfoForm.gender.$error"] > .error'));

    this.zipcodeError = element(by.css('[ng-messages="personalInfoForm.zipcode.$error"] > .error'));
    this.zipcodeUnverifiedError = element(by.css('[ng-if="validationError.zipcode"] > .error'));

    this.cityError = element(by.css('[ng-messages="personalInfoForm.city.$error "] > .error'));

    this.stateError = element(by.css('[ng-if="validationError.state"] > .error'));


    this.setFirstName = function (fnm) {

        this.firstName.clear().sendKeys(fnm);
    };

    this.setLastName = function (inputStr) {

        this.lastName.clear().sendKeys(inputStr);
    };

    this.setBirthdate = function (year, month, day) {
        month = month - 1; // month start with 0 = jan
        browser.touchActions().tap(this.birthdate).perform();
        browser.executeScript("mobiscroll.activeInstance.setVal(new Date(" + year + "," + month + "," + day + "), true, true, false, 3000);");
        browser.executeScript("mobiscroll.activeInstance.select();");
    };

    this.setGender = function (inputStr) {
        browser.touchActions().tap(this.genderParent).perform();
        browser.executeScript("mobiscroll.activeInstance.setVal('"+inputStr+"', true, true, false, 3000);");
        browser.executeScript("mobiscroll.activeInstance.select();");
//        this.gender.evaluate("personalInfo.gender='" + inputStr + "'");
    };

    this.setZipcode = function (inputStr) {
//        this.zipcode.click();
//        browser.touchActions().tap(this.zipcodeParent).perform();
        this.zipcode.clear();
        browser.sleep(1000);
        this.zipcode.sendKeys(inputStr);
    };

    this.setCity = function (inputStr) {
        this.city.click();
        this.city.clear().sendKeys(inputStr);
    };

    this.setHeight = function (inputStr) {

        this.height.clear().sendKeys(inputStr);
    };

    this.setWeight = function (inputStr) {
        this.weight.clear();
        browser.sleep(1000);
        this.weight.sendKeys(inputStr);
    };

    this.setState = function (inputStr) {
        browser.touchActions().tap(this.stateParent).perform();
        browser.executeScript("mobiscroll.activeInstance.setVal('"+inputStr+"', true, true, false, 3000);");
        browser.executeScript("mobiscroll.activeInstance.select();");
    };
    
    this.clearAll = function(){
        this.firstName.clear();
        this.lastName.clear();
        
        browser.touchActions().tap(this.birthdate).perform();
        browser.executeScript("mobiscroll.activeInstance.clear();");
        
        browser.touchActions().tap(this.genderParent).perform();
        browser.executeScript("mobiscroll.activeInstance.clear();");
//        this.gender.evaluate("personalInfo.gender=''");
        
        this.height.clear();
        this.weight.clear();
        
        this.zipcode.clear();
    };
};

module.exports = RegStep2Page;