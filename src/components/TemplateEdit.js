import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
//import PelamarList from './pelamar-listing.component';
//----
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { TemplatePreviewModal } from "./TemplatePreviewModal";

const getHtml = (editorState) =>
  draftToHtml(convertToRaw(editorState.getCurrentContent())); //At the top of the class component
class TemplateEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp_content: null,
      editorState: EditorState.createEmpty(),
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/ms_template_undangan/edit/${id}`)
      .then((response) => {
        this.setState({
          temp_content: response.data.temp_content,
        });
      })
      .catch((err) => console.log(err));
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
    this.setState({ temp_content: getHtml(editorState) });
  };

  handleFormSubmit(event) {
    // alert("Data Berhasil Tersimpan!");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`http://127.0.0.1:8000/api/ms_posisi/update/${id}`, {
        temp_content: this.state.temp_content,
      })
      .then((response) => {
        swal("Sukses!", "Data Berhasil Diubah!", "success");
        this.setState({
          temp_content: "",
        });
        this.props.history.push("/TemplateList");
      })
      .catch((err) =>
        swal({
          title: "Error!",
          text: err,
          icon: "error",
        })
      );
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Ubah Template</h1>
          <ol className="breadcrumb">
            <li className="active">Data Template</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary">
                <form role="form" onSubmit={this.handleFormSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label>Konten</label>
                      <Editor
                        editorState={editorState}
                        wrapperClassName="rich-editor demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                        value={this.state.temp_content}
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Ubah Template
                    </button>
                  </div>
                </form>

                <h4>Underlying HTML</h4>
                <div className="html-view">{getHtml(editorState)}</div>
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#previewModal"
                >
                  Preview message
                </button>
                <TemplatePreviewModal output={getHtml(editorState)} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TemplateEdit;
