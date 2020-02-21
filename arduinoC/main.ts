enum FUNCKEY {
  //% block="NONE"
  NONE,
  //% block="KEY_LEFT_CTRL"
  KEY_LEFT_CTRL,
  //% block="KEY_LEFT_SHIFT"
  KEY_LEFT_SHIFT,
  //% block="KEY_LEFT_ALT"
  KEY_LEFT_ALT,
  //% block="KEY_LEFT_GUI"
  KEY_LEFT_GUI
}

enum KEY {
  //% block="a"
  a,
  //% block="b"
  b,
  //% block="c"
  c,
  //% block="d"
  d,
  //% block="e"
  e,
  //% block="f"
  f,
  //% block="g"
  g,
  //% block="h"
  h,
  //% block="i"
  i,
  //% block="j"
  j,
  //% block="k"
  k,
  //% block="l"
  l,
  //% block="m"
  m,
  //% block="n"
  n,
  //% block="o"
  o,
  //% block="p"
  p,
  //% block="q"
  q,
  //% block="r"
  r,
  //% block="s"
  s,
  //% block="t"
  t,
  //% block="u"
  u,
  //% block="v"
  v,
  //% block="w"
  w,
  //% block="x"
  x,
  //% block="y"
  y,
  //% block="z"
  z,
  //% block="1"
  1,
  //% block="2"
  2,
  //% block="3"
  3,
  //% block="4"
  4,
  //% block="5"
  5,
  //% block="6"
  6,
  //% block="7"
  7,
  //% block="8"
  8,
  //% block="9"
  9,
  //% block="0"
  0,
  //% block="KEY_UP_ARROW"
  KEY_UP_ARROW,
  //% block="KEY_DOWN_ARROW"
  KEY_DOWN_ARROW,
  //% block="KEY_LEFT_ARROW"
  KEY_LEFT_ARROW,
  //% block="KEY_RIGHT_ARROW"
  KEY_RIGHT_ARROW,
  //% block="KEY_BACKSPACE"
  KEY_BACKSPACE,
  //% block="KEY_TAB"
  KEY_TAB,
  //% block="KEY_RETURN"
  KEY_RETURN,
  //% block="KEY_ESC"
  KEY_ESC,
  //% block="KEY_INSERT"
  KEY_INSERT,
  //% block="KEY_DELETE"
  KEY_DELETE,
  //% block="KEY_PAGE_UP"
  KEY_PAGE_UP,
  //% block="KEY_PAGE_DOWN"
  KEY_PAGE_DOWN,
  //% block="KEY_HOME"
  KEY_HOME,
  //% block="KEY_END"
  KEY_END,
  //% block="KEY_CAPS_LOCK"
  KEY_CAPS_LOCK,
  //% block="KEY_F1"
  KEY_F1,
  //% block="KEY_F2"
  KEY_F2,
  //% block="KEY_F3"
  KEY_F3,
  //% block="KEY_F4"
  KEY_F4,
  //% block="KEY_F5"
  KEY_F5,
  //% block="KEY_F6"
  KEY_F6,
  //% block="KEY_F7"
  KEY_F7,
  //% block="KEY_F8"
  KEY_F8,
  //% block="KEY_F9"
  KEY_F9,
  //% block="KEY_F10"
  KEY_F10,
  //% block="KEY_F11"
  KEY_F11,
  //% block="KEY_F12"
  KEY_F12
}

enum KEY_MEDIA {
  //% block="KEY_MEDIA_NEXT_TRACK"
  KEY_MEDIA_NEXT_TRACK,
  //% block="KEY_MEDIA_PREVIOUS_TRACK"
  KEY_MEDIA_PREVIOUS_TRACK,
  //% block="KEY_MEDIA_STOP"
  KEY_MEDIA_STOP,
  //% block="KEY_MEDIA_PLAY_PAUSE"
  KEY_MEDIA_PLAY_PAUSE,
  //% block="KEY_MEDIA_MUTE"
  KEY_MEDIA_MUTE,
  //% block="KEY_MEDIA_VOLUME_UP"
  KEY_MEDIA_VOLUME_UP,
  //% block="KEY_MEDIA_VOLUME_DOWN"
  KEY_MEDIA_VOLUME_DOWN,
  //% block="KEY_MEDIA_WWW_HOME"
  KEY_MEDIA_WWW_HOME,
  //% block="KEY_MEDIA_WWW_STOP"
  KEY_MEDIA_WWW_STOP,
  //% block="KEY_MEDIA_WWW_BACK"
  KEY_MEDIA_WWW_BACK
}

enum KEY_MEDIA_TEST {
  //% block="KEY_MEDIA_LOCAL_MACHINE_BROWSER"
  KEY_MEDIA_LOCAL_MACHINE_BROWSER,
  //% block="KEY_MEDIA_CALCULATOR"
  KEY_MEDIA_CALCULATOR,
  //% block="KEY_MEDIA_WWW_BOOKMARKS"
  KEY_MEDIA_WWW_BOOKMARKS,
  //% block="KEY_MEDIA_WWW_SEARCH"
  KEY_MEDIA_WWW_SEARCH,
  //% block="KEY_MEDIA_CONSUMER_CONTROL_CONFIGURATION"
  KEY_MEDIA_CONSUMER_CONTROL_CONFIGURATION,
  //% block="KEY_MEDIA_EMAIL_READER"
  KEY_MEDIA_EMAIL_READER
}

enum ACT {
  //% block="WRITE"
  WRITE,
  //% block="PRESS"
  PRESS,
  //% block="RELEASE"
  RELEASE
}

//% color="#833045" iconWidth=40 iconHeight=40  // C4FD35  D86FA4  833045
namespace bleKeyboard {
  //% block="BLE Keyboard init: name [NAME]" blockType="command"
  //% NAME.shadow="string" NAME.defl="BLE Keyboard"
  export function begin(parameter: any, block: any) {
    let name = parameter.NAME.code;
    Generator.addInclude("BleKeyboard", "#include <BleKeyboard.h>");
    Generator.addObject(
      `timer`,
      `BleKeyboard`,
      `bleKeyboard(${name}, "Espressif", 100);`
    );
    Generator.addSetup("bleKeyboard.begin", `bleKeyboard.begin();`);
  }

  //% block="BLE Keyboard is connected?" blockType="boolean"
  export function isConnected() {
    Generator.addCode("bleKeyboard.isConnected()");
  }

  //% block="BLE Keyboard print [WORD]" blockType="command"
  //% WORD.shadow="string" WORD.defl="Hello World!"
  export function print(parameter: any, block: any) {
    let word = parameter.WORD.code;
    Generator.addCode(`bleKeyboard.print(${word});`);
  }

  //   //% block="BLE Keyboard [ACT] [KEY]" blockType="command"
  //   //% ACT.shadow="dropdown" ACT.options="ACT" ACT.defl="ACT.CLICK"
  //   //% KEY.shadow="dropdown" KEY.options="KEY"
  //   export function sendKey(parameter: any, block: any) {
  //     let act = parameter.ACT.code;
  //     let key = parameter.KEY.code;
  //     if (act === "WRITE") {
  //       Generator.addCode(`bleKeyboard.write(${key});`);
  //     } else if (act === "PRESS") {
  //       Generator.addCode(`bleKeyboard.press(${key});`);
  //     } else {
  //       Generator.addCode(`bleKeyboard.release(${key});`);
  //     }
  //   }

  //% block="BLE Keyboard Comb Key [FUNC_KEY1] [FUNC_KEY2] [KEY]" blockType="command"
  //% FUNC_KEY1.shadow="dropdown" FUNC_KEY1.options="FUNCKEY" FUNC_KEY1.defl="FUNCKEY.NONE"
  //% FUNC_KEY2.shadow="dropdown" FUNC_KEY2.options="FUNCKEY" FUNC_KEY2.defl="FUNCKEY.NONE"
  //% KEY.shadow="dropdown" KEY.options="KEY"
  export function sendCombKey(parameter: any, block: any) {
    let funckey1 = parameter.FUNC_KEY1.code;
    let funckey2 = parameter.FUNC_KEY2.code;
    let key = parameter.KEY.code;
    let code = "";
    if (key.indexOf("KEY") == -1) {
      key = "'" + key + "'";
    }
    if (funckey1 !== "NONE") {
      code += `bleKeyboard.press(${funckey1});\n\t`;
    }
    if (funckey2 !== "NONE") {
      code += `bleKeyboard.press(${funckey2});\n\t`;
    }
    code += `bleKeyboard.press(${key});\n\t`;
    code += "delay(100);\n\t";
    code += "bleKeyboard.releaseAll();";
    Generator.addCode(code);
  }

  //% block="BLE Keyboard media write [KEY_MEDIA]" blockType="command"
  //% KEY_MEDIA.shadow="dropdown" KEY_MEDIA.options="KEY_MEDIA"
  export function mediaWrite(parameter: any, block: any) {
    let key = parameter.KEY_MEDIA.code;
    Generator.addCode(`bleKeyboard.write(${key});`);
  }

//   //% block="BLE Keyboard releaseAll" blockType="command"
//   export function releaseAll(parameter: any, block: any) {
//     Generator.addCode(`bleKeyboard.releaseAll();`);
//   }

}
