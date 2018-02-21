/*jshint esversion: 6*/
const fileObjectApp = (function fileObjectApp() {
  "use strict";

  var dom = {}, files;

  /*
    ##################################
  */

  const displayFiles = (fileList) => {

    Array.from(fileList).forEach((f, i) => {
      console.log(f);
      dom.fileList.innerHTML += `<tr>
        <td>${ f.name }</td>
        <td>${ f.type }</td>
        <td>${ f.size }</td>
        <td>
          <button data-key="${i}" class="btn fa fa-eye"></button>
        </td>
      </tr>`;
    });

    dom.fileList.querySelectorAll(".btn").forEach(btn => {
      btn.onmouseenter = showPreview;
    });
  };

  const handleDOMEvents = () => {
    dom.btnOpen.onclick = e => {
      dom.inputFile.click();
    };
    dom.inputFile.onchange = e => {
      files = e.target.files || e.srcElement.files;
      console.log(files);
      displayFiles(files);
    };
  };

  const init = () => {
    console.log("ready to rock !");

    setDOMElements(); // exécuter cette fonction d'abord ! (affecte les élément HTML)
    handleDOMEvents(); // pour écouter les events sur les éléments de l'UI
  };

  const setDOMElements = () => {
    dom.btnOpen = document.getElementById("btn_open_file");
    dom.inputFile = document.getElementById("file_input");
    dom.imgPreview = document.getElementById("img_preview");
    dom.fileList = document.getElementById("file_list").children[0];
    dom.views = dom.fileList.getElementsByClassName("fa-eye");
  };

  const showPreview = (e) => {
    const target = e.target || e.srcElement;
    const reader =  new FileReader();
    const targetFile = files[target.getAttribute("data-key")];

    reader.onload = e => {
      const target = e.target || e.srcElement;
      dom.imgPreview.src = target.result;
    };

    reader.onprogress = e => {
      console.log("progress");
      console.log(e);
    };

    console.log(targetFile);
    reader.readAsDataURL(targetFile);
    // reader.readAsArrayBuffer(targetFile);
  };

  /*
    ##################################
  */

  window.addEventListener("DOMContentLoaded", init);

  return {};

}());
