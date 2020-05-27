const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    // const content = getS('.top-block').innerHTML;
    // getS('.edit-area').value = content;
    getS('.edit-area').value = getS('.top-block').innerHTML;
}

getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})

function fontSize() {
    // console.log(event.target.value);
    getS('.top-block').style.fontSize = event.target.value;
}

let fF = document.getElementById('fontFamily');
fF.onchange = function (e) {
    // console.log(e.target.value);
    console.log(this.value);
    getS('.top-block').style.fontFamily = this.value;
}


getS('.btn-text-color').onclick = function () {
    getS('.colors').classList.remove('hide');
    let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.color = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        }
    }
}

getS('.btn-bg-color').onclick = function () {
    getS('.colors').classList.remove('hide');
    let colors = ['black', 'white', 'deeppink', 'yellow', 'pink', 'gray', 'red', 'green', 'blue'];
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        }
    }
}


/* start function bold style */

function fontWeight() {
    // console.log(event.target.checked);
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    }
    else {
        getS('.top-block').classList.remove('bold');
    }
}

function fontWeightCursive() {
    // console.log(event.target.checked);
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive');
    }
    else {
        getS('.top-block').classList.remove('cursive');
    }
}

/* end function bold style */

getS('.btn-add').onclick = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}


getS('.btn-list').onclick = function () {
    getS('.create-list').classList.remove('hide');
    getS('.create-table').classList.add('hide');

}



getS('.btn-table').onclick = function () {
    getS('.create-table').classList.remove('hide');
    getS('.create-list').classList.add('hide');

}

const list = document.forms['form-list'];

getS('.btn-create-list').onclick = function () {

    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i + 1}</li>`;
    }
    getS('.edit-area').value += '</ul>';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}


//create table

const table = document.forms['form-table'];

getS('.btn-create-table').onclick = function () {
    const countTD = table.countTD.value
    const countTR = table.countTR.value
    const widthTD = table.widthTD.value
    const heightTD = table.heightTD.value
    const widthBorder = table.widthBorder.value
    const typeBorder = table.typeBorder.value
    const colorBorder = table.colorBorder.value

    getS('.edit-area').value += `<table >`;
  
    for (let i = 0; i < countTR; i++) {
        getS('.edit-area').value += `<tr>`;
        for (let a = 0; a < countTD; a++) {
            getS('.edit-area').value += `<td style = "width: ${widthTD}px; height : ${heightTD}px; border : ${widthBorder}px ${typeBorder} ${colorBorder}"> TD </td>`;
        }
        getS('.edit-area').value += `</tr>`;

    }

    getS('.edit-area').value += '</table>';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');

    // console.log(countTD,countTR, widthTD, heightTD, widthBorder, typeBorder, colorBorder)

}