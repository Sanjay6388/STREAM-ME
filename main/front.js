const isLogin = window.localStorage.getItem("login")
if (isLogin === "true") {
    if (window.location.pathname !== "/main/front.html")
        window.location.assign("/main/front.html")
} else {
    window.location.assign("/index.html")
}
//JOIN

function join() {
    window.location.assign("/main/JOIN/join.html")
}

//SIDEBAR //
const menuItems = document.querySelectorAll('.menu-item');

// Remove Active Class From All Menu Item
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');




    })
})
//THEME
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.cutomize-theme');


//THEME DISPLAY

// open model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

// close model
const closeThemeModel = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('cutomize-theme')) {
        themeModel.style.display = 'none';
    }
}
document.getElementsByClassName('cutomize-theme')[0].addEventListener('click', closeThemeModel)

//font
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

// FONTS
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

//FONTS=======

fontSizes.forEach(size => {


    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--stickey-top-left', '5.4rem');
            root.style.setProperty('--stickey-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--stickey-top-left', '5.4rem');
            root.style.setProperty('--stickey-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--stickey-top-left', '5.4rem');
            root.style.setProperty('--stickey-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--stickey-top-left', '5.4rem');
            root.style.setProperty('--stickey-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--stickey-top-left', '5.4rem');
            root.style.setProperty('--stickey-top-right', '-35rem');
        }

        // change font size
        document.querySelector('html').style.fontSize = fontSize;
    })
})
//color
const colorPalette = document.querySelectorAll('.choose-color span')

/// remove active class colours
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;

        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--color-primary-hue', primaryHue);
    })
})
//background
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//BACKGROUND//

//theme Background value 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background  color 
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);

}

Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '85%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

//Message
//MESSAGES
const Msg = document.querySelector('#messages-notifications');
const MsgMode = document.querySelector('.messages01');

//OPEN MODEL
const openMsgMode = () => {
    MsgMode.style.display = 'grid';
}
//close model
const closeMsgMode = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('messages01')) {
        MsgMode.style.display = 'none';
    }
}

document.getElementsByClassName('messages01')[0].addEventListener('click', closeMsgMode)


//====================WALLET=================================//
//walet
const Wall = document.querySelector('#wallet-pop');
const wallet = document.querySelector('.wallet');

// OPEN MODEL
const openwallet = () => {
    wallet.style.display = 'grid';
}

// CLOSE MODEL
const closewallet = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('wallet')) {
        wallet.style.display = 'none';
    }
}
document.getElementsByClassName('wallet')[0].addEventListener('click', closewallet)

//====================LOGOUT====================//

const signout = (e) => {
    window.localStorage.setItem("login", "false");
    window.location.reload();
}
