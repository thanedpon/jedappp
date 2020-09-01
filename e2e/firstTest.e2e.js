import { expect, element, by, waitFor, device} from 'detox';


describe('Login with SM ID', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  test('case 1 Login ', async () => {
    await device.reloadReactNative();
    await element(by.id('username')).typeText('Sm01');
    await element(by.id('password')).typeText('123456');

    await element(by.id('Login')).tap();
  });

  test('case 2 Home ', async () => {
    await expect(element(by.id('header'))).toBeVisible();

    await element(by.id('Profile')).tap();
  });

  test('case 3 Profile', async() => {
    await element(by.id('search')).typeText('สมชาย');

    await element(by.id('search')).clearText();

    await element(by.text('Tap Me!'));


    await element(by.id('addPP')).tap();
    // await element(by.id('test')).tap();

  });

  // test('case 4 Add PP', async() => {

  //   // await element(by.id('ชื่อ')).tap();

  //   await element(by.id('nameTitle')).typeText('สมชาย');

  //   await element(by.id('firstname')).typeText('สมชาย');

  //   await element(by.id('lastname')).typeText('ทองคำ');

  //   // await element(by.id('ชื่อ')).tap();
  //   // await expect(element(by.id('firstname'))).toBeVisible();
  //   // await element(by.id('inputusername')).typeText('สมจิต');
    
  //   // await expect(element(by.id('lastname'))).toBeVisible();
  //   // await element(by.id('inputlastname')).typeText('ทองดี');

  //   // await expect(element(by.id('email'))).toBeVisible();
  //   // await element(by.id('inputemail')).typeText('lala@hotmail.com');

  //   // await expect(element(by.id('phone'))).toBeVisible();
  //   // await element(by.id('inputphone')).typeText('0973359065');
    
  //   // await element(by.id('button')).tap();

  // });
});
