import React, { Component } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
//import PelamarList from './pelamar-listing.component';

export default class TemplateCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp_content: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(content, editor) {
    this.setState({ content });
  }

  handleFormSubmit(event) {
    alert("Data Berhasil Tersimpan!");
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/ms_posisi/create", {
        pos_nama: this.state.pos_nama,
      })
      .then((response) => {
        this.setState({
          pos_nama: "",
        });
        this.props.history.push("/PosisiList");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Template Undangan</h1>
          <ol className="breadcrumb">
            <li className="active">Template Undangan</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div class="pull-right box-tools">
                <button
                  type="button"
                  class="btn btn-info btn-sm"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i class="fa fa-minus"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-info btn-sm"
                  data-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i class="fa fa-times"></i>
                </button>
              </div>
              <div className="box box-primary">
                <form role="form" onSubmit={this.handleFormSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Konten</label>
                      <Editor
                        init={{ height: 500, menubar: false }}
                        onEditorChange={this.handleChange}
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Simpan Template
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
