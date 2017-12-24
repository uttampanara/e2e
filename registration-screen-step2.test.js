var step2Page = require('../../../pageObject/registration/registration-screen-step2.page');
describe('FET-4 : Registration : Yearly : Create Account step 2 ', function () {
    var step2 = new step2Page();
    
    var EC = protractor.ExpectedConditions;
    
    it('FET-4 : TC-16 : Registration : Yearly : Check Validation: All fields null', function () {
        
        browser.wait(EC.invisibilityOf($('.loading-container.visible.active')));
        
        step2.getStartedButton.click();
                                                        
        expect(step2.firstNameError.getText()).toBe(step2.v_required);
        expect(step2.lastNameError.getText()).toBe(step2.v_required);
        expect(step2.birthdateError.getText()).toBe(step2.v_required);
        expect(step2.heightError.getText()).toBe(step2.v_required);
        expect(step2.weightError.getText()).toBe(step2.v_required);
        expect(step2.genderError.getText()).toBe(step2.v_required);
        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
        expect(step2.cityError.getText()).toBe(step2.v_required);
        expect(step2.stateError.getText()).toBe(step2.v_required);
        
        console.log("FET-4 : TC-16 : Registration : Yearly : Check Validation: All fields null");
    });

    it('FET-4 : TC-17 : Registration : Yearly : Check Validation: Input first name', function() {      
        
        step2.setFirstName(FXR.USER.FIRST_NAME);

        step2.getStartedButton.click();

        expect(step2.lastNameError.getText()).toBe(step2.v_required);
        expect(step2.birthdateError.getText()).toBe(step2.v_required);
        expect(step2.heightError.getText()).toBe(step2.v_required);
        expect(step2.weightError.getText()).toBe(step2.v_required);
        expect(step2.genderError.getText()).toBe(step2.v_required);
        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
        expect(step2.cityError.getText()).toBe(step2.v_required);
        expect(step2.stateError.getText()).toBe(step2.v_required);
        
        console.log("FET-4 : TC-17 : Registration : Yearly : Check Validation: Input first name");
    });

    it('FET-4 : TC-18 : Registration : Yearly : Check Validation: Input last name', function() {
        
        step2.setLastName(FXR.USER.LAST_NAME);

        step2.getStartedButton.click();

        expect(step2.birthdateError.getText()).toBe(step2.v_required);
        expect(step2.heightError.getText()).toBe(step2.v_required);
        expect(step2.weightError.getText()).toBe(step2.v_required);
        expect(step2.genderError.getText()).toBe(step2.v_required);
        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
        expect(step2.cityError.getText()).toBe(step2.v_required);
        expect(step2.stateError.getText()).toBe(step2.v_required);
        
        console.log("FET-4 : TC-18 : Registration : Yearly : Check Validation: Input last name");
    });

    it('FET-4 : TC-19 : Registration : Yearly : Check Validation: Input Birth date', function() {
        
        step2.setBirthdate(FXR.USER.BIRTH_YEAR, FXR.USER.BIRTH_MONTH, FXR.USER.BIRTH_DAY);

        step2.getStartedButton.click();

        expect(step2.heightError.getText()).toBe(step2.v_required);
        expect(step2.weightError.getText()).toBe(step2.v_required);
        expect(step2.genderError.getText()).toBe(step2.v_required);
        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
        expect(step2.cityError.getText()).toBe(step2.v_required);
        expect(step2.stateError.getText()).toBe(step2.v_required);
        
        console.log("FET-4 : TC-19 : Registration : Yearly : Check Validation: Input Birth date");
    });

   it('FET-4 : TC-20 : Registration : Yearly : Check Validation: Input Gender', function() {      
        
        step2.setGender(FXR.USER.GENDER);
        step2.getStartedButton.click();

        expect(step2.heightError.getText()).toBe(step2.v_required);
        expect(step2.weightError.getText()).toBe(step2.v_required);
        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
        expect(step2.cityError.getText()).toBe(step2.v_required);
        expect(step2.stateError.getText()).toBe(step2.v_required);
        
        console.log("FET-4 : TC-20 : Registration : Yearly : Check Validation: Input Gender");
    });

   it('FET-4 : TC-21 : Registration : Yearly : Check Validation: Input Height', function() {      
        
        step2.setHeight(FXR.USER.HEIGHT);
        step2.getStartedButton.click();

        expect(step2.weightError.getText()).toBe(step2.v_required);
        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
        expect(step2.cityError.getText()).toBe(step2.v_required);
        expect(step2.stateError.getText()).toBe(step2.v_required);
        
        console.log("FET-4 : TC-21 : Registration : Yearly : Check Validation: Input Height");
    });

   it('FET-4 : TC-22 : Registration : Yearly : Check Validation: Input Weight', function() {
        
        step2.setWeight(FXR.USER.WEIGHT);
        step2.getStartedButton.click();

        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
        expect(step2.cityError.getText()).toBe(step2.v_required);
        expect(step2.stateError.getText()).toBe(step2.v_required);
        
        console.log("FET-4 : TC-22 : Registration : Yearly : Check Validation: Input Weight");
    });

//    it('FET-4 : TC-23 : Registration : Yearly : Check Validation: Input city and state', function() {      
//        
//        step2.setCity(FXR.REGISTRATION.CITY);
//        
//        step2.setState(FXR.REGISTRATION.STATE_ID);
//
//        step2.getStartedButton.click();
//
//        expect(step2.zipcodeError.getText()).toBe(step2.v_required);
//
//        console.log("FET-4 : TC-23 : Registration : Yearly : Check Validation: Input city");
//    });

//     it('FET-4 : TC-24 : Registration : Yearly : Check Validation: Invalid Zip code', function() {      
//        
//         step2.setZipcode(FXR.REGISTRATION.INV_ZIP);
//
//         step2.getStartedButton.click();
//
//         expect(step2.zipcodeError.getText()).toBe(step2.v_zip_limit);
//        
//         console.log("FET-4 : TC-24 : Registration : Yearly : Check Validation: Invalid Zip code");
//     });
//
//     it('FET-4 : TC-25 : Registration : Yearly : Check Validation: Unverified Zip code', function() {      
//        
//         step2.setZipcode(FXR.REGISTRATION.UN_V_ZIP);
//         
//         browser.sleep(2000);
//         
//         browser.wait(EC.invisibilityOf($('.text-loading')));
//
//         step2.getStartedButton.click();
//
//         expect(step2.zipcodeUnverifiedError.getText()).toBe(step2.v_zip);
//        
//         console.log("FET-4 : TC-25 : Registration : Yearly : Check Validation: Unverified Zip code");
//     });

    it('FET-4 : TC-26 : Registration : Yearly : Check Validation: Form to be submit successfully', function () {
        
        step2.setZipcode(FXR.USER.ZIPCODE);
        
        browser.sleep(2000);
        
        browser.wait(EC.invisibilityOf($('.text-loading')));

        step2.getStartedButton.click();

        step2.zipcode.getText(function(text){
            console.log("final :"+text);
        });

        expect(step2.getStartedButton).not.toBeUndefined();
        
        step2.getStartedButton.click();

        browser.executeScript("mobiscroll.activeInstance.select();");

        browser.sleep(1000);

        browser.executeScript("mobiscroll.activeInstance.select();");

        browser.sleep(1000);

        browser.executeScript("mobiscroll.activeInstance.select();");
        browser.wait(EC.invisibilityOf($('.loading-container.visible.active')));
        console.log("FET-4 : TC-26 : Registration : Yearly : Check Validation: Form to be submit successfully");
    });
});