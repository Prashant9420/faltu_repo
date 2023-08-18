import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";
DocumentEditorContainerComponent.Inject(Toolbar);
import { useEffect, useRef } from "react";
import style from "./Editor.module.css";

const Editor = () => {
  let documentEditor: DocumentEditorComponent = new DocumentEditorComponent(
    undefined
  );
  let container: DocumentEditorContainerComponent;
  const editorRef = useRef(null);
  let contentChanged: boolean = false;
  function onClick() {
    let http: XMLHttpRequest = new XMLHttpRequest();
    //add your url in which you want to open document inside the ""
    let content = { fileUrl: "" };
    let baseurl: string = "/api/documenteditor/ImportFileURL";
    http.open("POST", baseurl, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.onreadystatechange = () => {
      if (http.readyState === 4) {
        if (http.status === 200 || http.status === 304) {
          //open the SFDT text in Document Editor
          container.documentEditor.open(http.responseText);
        }
      }
    };
    http.send(JSON.stringify(content));
  }

  return (
    <div>
      <DocumentEditorContainerComponent
        id="documnt_editor"
        height="100vh"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
        ref={editorRef}
      />
      <button onClick={onClick} className={style.importButton}>
        Import
      </button>
    </div>
  );
};

export default Editor;
