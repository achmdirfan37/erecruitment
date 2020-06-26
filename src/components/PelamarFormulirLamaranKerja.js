import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ThemeProvider } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { Alert } from "react-alert";

class PelamarFormulirLamaranKerja extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ms_keterampilan: [],
      ms_riwayat_pendidikan: [],
      ms_pengalaman_kerja: [],
      id: "",
      pel_nama_lengkap: "",
      pel_tempat_lahir: "",
      pel_tanggal_lahir: "",
      pel_no_ktp: "",
      pel_kewarganegaraan: "",
      pel_alamat: "",
      pel_alamat_ortu: "",
      pel_foto: "",
      pel_posisi: "",
      pel_alasan_memilih_jurusan: "",
      pel_karya_ilmiah: "",
      pel_pendidikan_non_formal: "",
      pel_bahasa: "",
      pel_status_pernikahan: "",
      pel_tanggal_status_pernikahan: "",
      pel_susunan_keluarga: "",
      pel_detail_atasan_bawahan: "",
      pel_masalah_dihadapi: "",
      pel_kesan_kerja: "",
      pel_inovasi_kerja: "",
      pel_orang_yang_mendorong: "",
      pel_case_keputusan: "",
      pel_cita_cita: "",
      pel_hal_mendorong_bekerja: "",
      pel_alasan_ingin_bekerja: "",
      pel_gaji_diharapkan: "",
      pel_fasilitas_diharapkan: "",
      pel_kapan_mulai_kerja: "",
      pel_urutan_jenis_pekerjaan: "",
      pel_lingkungan_kerja_diminati: "",
      pel_bersedia_diluar_daerah: "",
      pel_tipe_orang_disenangi: "",
      pel_hal_sulit_mengambil_keputusan: "",
      pel_kenalan_di_perusahaan_astra: "",
      pel_referensi_perusahaan: "",
      pel_hobi: "",
      pel_cara_mengisi_waktu_luang: "",
      pel_organisasi_diikuti: "",
      pel_psikotes: "",
      pel_kekuatan: "",
      pel_kelemahan: "",
      pel_riwayat_penyakit: "",
      pel_persetujuan: "",
      pel_email: "",
      pel_no_telepon: "",
      pel_no_telepon_ortu: "",
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
    };

    this.onChange = this.onChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNoTeleponChange = this.handleNoTeleponChange.bind(this);
    this.handleNoTeleponOrtuChange = this.handleNoTeleponOrtuChange.bind(this);
    this.handleNamaLengkapChange = this.handleNamaLengkapChange.bind(this);
    this.handleTempatLahirChange = this.handleTempatLahirChange.bind(this);
    this.handleTanggalLahirChange = this.handleTanggalLahirChange.bind(this);
    this.handleNoKtpChange = this.handleNoKtpChange.bind(this);
    this.handleKewarganegaraanChange = this.handleKewarganegaraanChange.bind(
      this
    );
    this.handleAlamatChange = this.handleAlamatChange.bind(this);
    this.handleAlamatOrtuChange = this.handleAlamatOrtuChange.bind(this);
    this.handlePosisiChange = this.handlePosisiChange.bind(this);
    this.handleAlasanMemilihJurusanChange = this.handleAlasanMemilihJurusanChange.bind(
      this
    );
    this.handleKaryaIlmiahChange = this.handleKaryaIlmiahChange.bind(this);
    this.handlePendidikanNonFormalChange = this.handlePendidikanNonFormalChange.bind(
      this
    );
    this.handleBahasaChange = this.handleBahasaChange.bind(this);
    this.handleStatusPernikahanChange = this.handleStatusPernikahanChange.bind(
      this
    );
    this.handleTanggalStatusPernikahanChange = this.handleTanggalStatusPernikahanChange.bind(
      this
    );
    this.handleSusunanKeluargaChange = this.handleSusunanKeluargaChange.bind(
      this
    );
    this.handleDetailAtasanBawahanChange = this.handleDetailAtasanBawahanChange.bind(
      this
    );
    this.handleMasalahDihadapiChange = this.handleMasalahDihadapiChange.bind(
      this
    );
    this.handleKesanKerjaChange = this.handleKesanKerjaChange.bind(this);
    this.handleInovasiKerjaChange = this.handleInovasiKerjaChange.bind(this);
    this.handleOrangYangMendorongChange = this.handleOrangYangMendorongChange.bind(
      this
    );
    this.handleCaseKeputusanChange = this.handleCaseKeputusanChange.bind(this);
    this.handleCitaCitaChange = this.handleCitaCitaChange.bind(this);
    this.handleHalMendorongBekerjaChange = this.handleHalMendorongBekerjaChange.bind(
      this
    );
    this.handleAlasanInginBekerjaChange = this.handleAlasanInginBekerjaChange.bind(
      this
    );
    this.handleGajiDiharapkanChange = this.handleGajiDiharapkanChange.bind(
      this
    );
    this.handleFasilitasDiharapkanChange = this.handleFasilitasDiharapkanChange.bind(
      this
    );
    this.handleKapanMulaiBekerjaChange = this.handleKapanMulaiBekerjaChange.bind(
      this
    );
    this.handleUrutanJenisPekerjaanChange = this.handleUrutanJenisPekerjaanChange.bind(
      this
    );
    this.handleLingkunganKerjaDiminatiChange = this.handleLingkunganKerjaDiminatiChange.bind(
      this
    );
    this.handleBersediaDiluarDaerahChange = this.handleBersediaDiluarDaerahChange.bind(
      this
    );
    this.handleTipeOrangDisenangiChange = this.handleTipeOrangDisenangiChange.bind(
      this
    );
    this.handleHalSulitMengambilKeputusanChange = this.handleHalSulitMengambilKeputusanChange.bind(
      this
    );
    this.handleKenalanDiPerusahaanAstraChange = this.handleKenalanDiPerusahaanAstraChange.bind(
      this
    );
    this.handleReferensiPerusahaanChange = this.handleReferensiPerusahaanChange.bind(
      this
    );
    this.handleHobiChange = this.handleHobiChange.bind(this);
    this.handleCaraMengisiWaktuLuangChange = this.handleCaraMengisiWaktuLuangChange.bind(
      this
    );
    this.handleOrganisasiDiikutiChange = this.handleOrganisasiDiikutiChange.bind(
      this
    );
    this.handlePsikotesChange = this.handlePsikotesChange.bind(this);
    this.handleKekuatanChange = this.handleKekuatanChange.bind(this);
    this.handleKelemahanChange = this.handleKelemahanChange.bind(this);
    this.handleRiwayatPenyakitChange = this.handleRiwayatPenyakitChange.bind(
      this
    );
    this.handlePersetujuanChange = this.handlePersetujuanChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.handlePageKeterampilanChange = this.handlePageKeterampilanChange.bind(
      this
    );
    this.handlePageRiwayatPendidikanChange = this.handlePageRiwayatPendidikanChange.bind(
      this
    );
    this.handlePagePengalamanKerjaChange = this.handlePagePengalamanKerjaChange.bind(
      this
    );
  }

  componentDidMount() {
    const id = 17;
    axios
      .get(`http://127.0.0.1:8000/api/ms_pelamar/${id}/edit`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          pel_email: response.data.pel_email,
          pel_no_telepon: response.data.pel_no_telepon,
          pel_no_telepon_ortu: response.data.pel_no_telepon_ortu,
          pel_nama_lengkap: response.data.pel_nama_lengkap,
          pel_tempat_lahir: response.data.pel_tempat_lahir,
          pel_tanggal_lahir: response.data.pel_tanggal_lahir,
          pel_no_ktp: response.data.pel_no_ktp,
          pel_kewarganegaraan: response.data.pel_kewarganegaraan,
          pel_alamat: response.data.pel_alamat,
          pel_alamat_ortu: response.data.pel_alamat_ortu,
          pel_foto: response.data.pel_foto,
          pel_posisi: response.data.pel_posisi,
          pel_alasan_memilih_jurusan: response.data.pel_alasan_memilih_jurusan,
          pel_karya_ilmiah: response.data.pel_karya_ilmiah,
          pel_pendidikan_non_formal: response.data.pel_pendidikan_non_formal,
          pel_bahasa: response.data.pel_bahasa,
          pel_status_pernikahan: response.data.pel_status_pernikahan,
          pel_tanggal_status_pernikahan:
            response.data.pel_tanggal_status_pernikahan,
          pel_susunan_keluarga: response.data.pel_susunan_keluarga,
          pel_detail_atasan_bawahan: response.data.pel_detail_atasan_bawahan,
          pel_masalah_dihadapi: response.data.pel_masalah_dihadapi,
          pel_kesan_kerja: response.data.pel_kesan_kerja,
          pel_inovasi_kerja: response.data.pel_inovasi_kerja,
          pel_orang_yang_mendorong: response.data.pel_orang_yang_mendorong,
          pel_case_keputusan: response.data.pel_case_keputusan,
          pel_cita_cita: response.data.pel_cita_cita,
          pel_hal_mendorong_bekerja: response.data.pel_hal_mendorong_bekerja,
          pel_alasan_ingin_bekerja: response.data.pel_alasan_ingin_bekerja,
          pel_gaji_diharapkan: response.data.pel_gaji_diharapkan,
          pel_fasilitas_diharapkan: response.data.pel_fasilitas_diharapkan,
          pel_kapan_mulai_kerja: response.data.pel_kapan_mulai_kerja,
          pel_urutan_jenis_pekerjaan: response.data.pel_urutan_jenis_pekerjaan,
          pel_lingkungan_kerja_diminati:
            response.data.pel_lingkungan_kerja_diminati,
          pel_bersedia_diluar_daerah: response.data.pel_bersedia_diluar_daerah,
          pel_tipe_orang_disenangi: response.data.pel_tipe_orang_disenangi,
          pel_hal_sulit_mengambil_keputusan:
            response.data.pel_hal_sulit_mengambil_keputusan,
          pel_kenalan_di_perusahaan_astra:
            response.data.pel_kenalan_di_perusahaan_astra,
          pel_referensi_perusahaan: response.data.pel_referensi_perusahaan,
          pel_hobi: response.data.pel_hobi,
          pel_cara_mengisi_waktu_luang:
            response.data.pel_cara_mengisi_waktu_luang,
          pel_organisasi_diikuti: response.data.pel_organisasi_diikuti,
          pel_psikotes: response.data.pel_psikotes,
          pel_kekuatan: response.data.pel_kekuatan,
          pel_kelemahan: response.data.pel_kelemahan,
          pel_riwayat_penyakit: response.data.pel_riwayat_penyakit,
          pel_persetujuan: response.data.pel_persetujuan,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://127.0.0.1:8000/api/ms_keterampilan/viewflk/${id}`)
      .then((response) => {
        this.setState({
          ms_keterampilan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });

    // ajax call
    axios
      .get(`http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view`)
      .then((response) => {
        this.setState({
          ms_riwayat_pendidikan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });

    // ajax call
    axios
      .get(`http://127.0.0.1:8000/api/ms_pengalaman_kerja/view`)
      .then((response) => {
        this.setState({
          ms_pengalaman_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  handlePageKeterampilanChange(pageNumber) {
    const id = 17;
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
    axios
      .get(
        `http://127.0.0.1:8000/api/ms_keterampilan/viewflk/${id}?page=` +
          pageNumber
      )
      .then((response) => {
        this.setState({
          ms_keterampilan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  handlePageRiwayatPendidikanChange(pageNumber) {
    const id = 17;
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
    axios
      .get(
        `http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view?page=` +
          pageNumber
      )
      .then((response) => {
        this.setState({
          ms_riwayat_pendidikan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  handlePagePengalamanKerjaChange(pageNumber) {
    const id = 17;
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
    axios
      .get(
        `http://127.0.0.1:8000/api/ms_pengalaman_kerja/view?page=` + pageNumber
      )
      .then((response) => {
        this.setState({
          ms_pengalaman_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  onChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    this.createFile(files[0]);
  }

  createFile(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        pel_foto: e.target.result,
      });
    };
    reader.readAsDataURL(file);
  }

  handleNamaLengkapChange(event) {
    this.setState({
      pel_nama_lengkap: event.target.value,
    });
  }

  handleTempatLahirChange(event) {
    this.setState({
      pel_tempat_lahir: event.target.value,
    });
  }

  handleTanggalLahirChange(event) {
    this.setState({
      pel_tanggal_lahir: event.target.value,
    });
  }

  handleNoKtpChange(event) {
    this.setState({
      pel_no_ktp: event.target.value,
    });
  }

  handleKewarganegaraanChange(event) {
    this.setState({
      pel_kewarganegaraan: event.target.value,
    });
  }

  handleAlamatChange(event) {
    this.setState({
      pel_alamat: event.target.value,
    });
  }

  handleAlamatOrtuChange(event) {
    this.setState({
      pel_alamat_ortu: event.target.value,
    });
  }

  handlePosisiChange(event) {
    this.setState({
      pel_posisi: event.target.value,
    });
  }

  handleAlasanMemilihJurusanChange(event) {
    this.setState({
      pel_alasan_memilih_jurusan: event.target.value,
    });
  }

  handleKaryaIlmiahChange(event) {
    this.setState({
      pel_karya_ilmiah: event.target.value,
    });
  }

  handlePendidikanNonFormalChange(event) {
    this.setState({
      pel_pendidikan_non_formal: event.target.value,
    });
  }

  handleBahasaChange(event) {
    this.setState({
      pel_bahasa: event.target.value,
    });
  }

  handleStatusPernikahanChange(event) {
    this.setState({
      pel_status_pernikahan: event.target.value,
    });
  }

  handleTanggalStatusPernikahanChange(event) {
    this.setState({
      pel_tanggal_status_pernikahan: event.target.value,
    });
  }

  handleSusunanKeluargaChange(event) {
    this.setState({
      pel_susunan_keluarga: event.target.value,
    });
  }

  handleDetailAtasanBawahanChange(event) {
    this.setState({
      pel_detail_atasan_bawahan: event.target.value,
    });
  }

  handleMasalahDihadapiChange(event) {
    this.setState({
      pel_masalah_dihadapi: event.target.value,
    });
  }

  handleKesanKerjaChange(event) {
    this.setState({
      pel_kesan_kerja: event.target.value,
    });
  }

  handleInovasiKerjaChange(event) {
    this.setState({
      pel_inovasi_kerja: event.target.value,
    });
  }

  handleOrangYangMendorongChange(event) {
    this.setState({
      pel_orang_yang_mendorong: event.target.value,
    });
  }

  handleCaseKeputusanChange(event) {
    this.setState({
      pel_case_keputusan: event.target.value,
    });
  }

  handleCitaCitaChange(event) {
    this.setState({
      pel_cita_cita: event.target.value,
    });
  }

  handleHalMendorongBekerjaChange(event) {
    this.setState({
      pel_hal_mendorong_bekerja: event.target.value,
    });
  }

  handleAlasanInginBekerjaChange(event) {
    this.setState({
      pel_alasan_ingin_bekerja: event.target.value,
    });
  }

  handleGajiDiharapkanChange(event) {
    this.setState({
      pel_gaji_diharapkan: event.target.value,
    });
  }

  handleFasilitasDiharapkanChange(event) {
    this.setState({
      pel_fasilitas_diharapkan: event.target.value,
    });
  }

  handleKapanMulaiBekerjaChange(event) {
    this.setState({
      pel_kapan_mulai_kerja: event.target.value,
    });
  }

  handleUrutanJenisPekerjaanChange(event) {
    this.setState({
      pel_urutan_jenis_pekerjaan: event.target.value,
    });
  }

  handleLingkunganKerjaDiminatiChange(event) {
    this.setState({
      pel_lingkungan_kerja_diminati: event.target.value,
    });
  }

  handleBersediaDiluarDaerahChange(event) {
    this.setState({
      pel_bersedia_diluar_daerah: event.target.value,
    });
  }

  handleTipeOrangDisenangiChange(event) {
    this.setState({
      pel_tipe_orang_disenangi: event.target.value,
    });
  }

  handleHalSulitMengambilKeputusanChange(event) {
    this.setState({
      pel_hal_sulit_mengambil_keputusan: event.target.value,
    });
  }

  handleKenalanDiPerusahaanAstraChange(event) {
    this.setState({
      pel_kenalan_di_perusahaan_astra: event.target.value,
    });
  }

  handleReferensiPerusahaanChange(event) {
    this.setState({
      pel_referensi_perusahaan: event.target.value,
    });
  }

  handleHobiChange(event) {
    this.setState({
      pel_hobi: event.target.value,
    });
  }

  handleCaraMengisiWaktuLuangChange(event) {
    this.setState({
      pel_cara_mengisi_waktu_luang: event.target.value,
    });
  }

  handleOrganisasiDiikutiChange(event) {
    this.setState({
      pel_organisasi_diikuti: event.target.value,
    });
  }

  handlePsikotesChange(event) {
    this.setState({
      pel_psikotes: event.target.value,
    });
  }

  handleKekuatanChange(event) {
    this.setState({
      pel_kekuatan: event.target.value,
    });
  }

  handleKelemahanChange(event) {
    this.setState({
      pel_kelemahan: event.target.value,
    });
  }

  handleRiwayatPenyakitChange(event) {
    this.setState({
      pel_riwayat_penyakit: event.target.value,
    });
  }

  handlePersetujuanChange(event) {
    this.setState({
      pel_persetujuan: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      pel_email: event.target.value,
    });
  }

  handleNoTeleponChange(event) {
    this.setState({
      pel_no_telepon: event.target.value,
    });
  }

  handleNoTeleponOrtuChange(event) {
    this.setState({
      pel_no_telepon_ortu: event.target.value,
    });
  }

  handleFormSubmit(event) {
    alert("Your Data is Saved!");
    event.preventDefault();
    const id = this.state.id;
    axios
      .put(`http://127.0.0.1:8000/api/ms_pelamar/${id}/updateflk`, {
        pel_email: this.state.pel_email,
        pel_no_telepon: this.state.pel_no_telepon,
        pel_no_telepon_ortu: this.state.pel_no_telepon_ortu,
        file: this.state.pel_foto,
        pel_nama_lengkap: this.state.pel_nama_lengkap,
        pel_tempat_lahir: this.state.pel_tempat_lahir,
        pel_tanggal_lahir: this.state.pel_tanggal_lahir,
        pel_no_ktp: this.state.pel_no_ktp,
        pel_kewarganegaraan: this.state.pel_kewarganegaraan,
        pel_alamat: this.state.pel_alamat,
        pel_alamat_ortu: this.state.pel_alamat_ortu,
        pel_foto: this.state.pel_foto,
        pel_posisi: this.state.pel_posisi,
        pel_alasan_memilih_jurusan: this.state.pel_alasan_memilih_jurusan,
        pel_karya_ilmiah: this.state.pel_karya_ilmiah,
        pel_pendidikan_non_formal: this.state.pel_pendidikan_non_formal,
        pel_bahasa: this.state.pel_bahasa,
        pel_status_pernikahan: this.state.pel_status_pernikahan,
        pel_tanggal_status_pernikahan: this.state.pel_tanggal_status_pernikahan,
        pel_susunan_keluarga: this.state.pel_susunan_keluarga,
        pel_detail_atasan_bawahan: this.state.pel_detail_atasan_bawahan,
        pel_masalah_dihadapi: this.state.pel_masalah_dihadapi,
        pel_kesan_kerja: this.state.pel_kesan_kerja,
        pel_inovasi_kerja: this.state.pel_inovasi_kerja,
        pel_orang_yang_mendorong: this.state.pel_orang_yang_mendorong,
        pel_case_keputusan: this.state.pel_case_keputusan,
        pel_cita_cita: this.state.pel_cita_cita,
        pel_hal_mendorong_bekerja: this.state.pel_hal_mendorong_bekerja,
        pel_alasan_ingin_bekerja: this.state.pel_alasan_ingin_bekerja,
        pel_gaji_diharapkan: this.state.pel_gaji_diharapkan,
        pel_fasilitas_diharapkan: this.state.pel_fasilitas_diharapkan,
        pel_kapan_mulai_kerja: this.state.pel_kapan_mulai_kerja,
        pel_urutan_jenis_pekerjaan: this.state.pel_urutan_jenis_pekerjaan,
        pel_lingkungan_kerja_diminati: this.state.pel_lingkungan_kerja_diminati,
        pel_bersedia_diluar_daerah: this.state.pel_bersedia_diluar_daerah,
        pel_tipe_orang_disenangi: this.state.pel_tipe_orang_disenangi,
        pel_hal_sulit_mengambil_keputusan: this.state
          .pel_hal_sulit_mengambil_keputusan,
        pel_kenalan_di_perusahaan_astra: this.state
          .pel_kenalan_di_perusahaan_astra,
        pel_referensi_perusahaan: this.state.pel_referensi_perusahaan,
        pel_hobi: this.state.pel_hobi,
        pel_cara_mengisi_waktu_luang: this.state.pel_cara_mengisi_waktu_luang,
        pel_organisasi_diikuti: this.state.pel_organisasi_diikuti,
        pel_psikotes: this.state.pel_psikotes,
        pel_kekuatan: this.state.pel_kekuatan,
        pel_kelemahan: this.state.pel_kelemahan,
        pel_riwayat_penyakit: this.state.pel_riwayat_penyakit,
        pel_persetujuan: this.state.pel_persetujuan,
      })
      .then((response) => {
        this.setState({
          pel_email: "",
          pel_no_telepon: "",
          pel_no_telepon_ortu: "",
          pel_nama_lengkap: "",
          pel_tempat_lahir: "",
          pel_tanggal_lahir: "",
          pel_no_ktp: "",
          pel_kewarganegaraan: "",
          pel_alamat: "",
          pel_alamat_ortu: "",
          pel_foto: "",
          pel_posisi: "",
          pel_alasan_memilih_jurusan: "",
          pel_karya_ilmiah: "",
          pel_pendidikan_non_formal: "",
          pel_bahasa: "",
          pel_status_pernikahan: "",
          pel_tanggal_status_pernikahan: "",
          pel_susunan_keluarga: "",
          pel_detail_atasan_bawahan: "",
          pel_masalah_dihadapi: "",
          pel_kesan_kerja: "",
          pel_inovasi_kerja: "",
          pel_orang_yang_mendorong: "",
          pel_case_keputusan: "",
          pel_cita_cita: "",
          pel_hal_mendorong_bekerja: "",
          pel_alasan_ingin_bekerja: "",
          pel_gaji_diharapkan: "",
          pel_fasilitas_diharapkan: "",
          pel_kapan_mulai_kerja: "",
          pel_urutan_jenis_pekerjaan: "",
          pel_lingkungan_kerja_diminati: "",
          pel_bersedia_diluar_daerah: "",
          pel_tipe_orang_disenangi: "",
          pel_hal_sulit_mengambil_keputusan: "",
          pel_kenalan_di_perusahaan_astra: "",
          pel_referensi_perusahaan: "",
          pel_hobi: "",
          pel_cara_mengisi_waktu_luang: "",
          pel_organisasi_diikuti: "",
          pel_psikotes: "",
          pel_kekuatan: "",
          pel_kelemahan: "",
          pel_riwayat_penyakit: "",
          pel_persetujuan: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Skills Data</h1>
          <ol className="breadcrumb">
            <li className="active">Skills Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Type of Skill</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_keterampilan !== undefined
                        ? this.state.ms_keterampilan.map((ms_keterampilans) => (
                            <tr key={ms_keterampilans.id}>
                              <td>{ms_keterampilans.id}</td>
                              <td>{ms_keterampilans.ket_nama}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageKeterampilanChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Education Background Data</h1>
          <ol className="breadcrumb">
            <li className="active">Education Background Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name of Educational Institution</th>
                        <th>Graduation Year</th>
                        <th>Educational Stage</th>
                        <th>Location</th>
                        <th>Majors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_riwayat_pendidikan !== null
                        ? this.state.ms_riwayat_pendidikan.map(
                            (ms_riwayat_pendidikans) => (
                              <tr key={ms_riwayat_pendidikans.id}>
                                <td>{ms_riwayat_pendidikans.id}</td>
                                <td>
                                  {
                                    ms_riwayat_pendidikans.rpd_nama_lembaga_pendidikan
                                  }
                                </td>
                                <td>
                                  {ms_riwayat_pendidikans.rpd_tahun_lulus}
                                </td>
                                <td>
                                  {ms_riwayat_pendidikans.rpd_kualifikasi}
                                </td>
                                <td>{ms_riwayat_pendidikans.rpd_lokasi}</td>
                                <td>{ms_riwayat_pendidikans.rpd_jurusan}</td>
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageRiwayatPendidikanChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Work Experience Data</h1>
          <ol className="breadcrumb">
            <li className="active">Work Experience Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Company Name</th>
                        <th>Start Year of Work</th>
                        <th>Finish Year of Work</th>
                        <th>Location</th>
                        <th>Job Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_pengalaman_kerja !== null
                        ? this.state.ms_pengalaman_kerja.map(
                            (ms_pengalaman_kerjas) => (
                              <tr key={ms_pengalaman_kerjas.id}>
                                <td>{ms_pengalaman_kerjas.id}</td>
                                <td>
                                  {ms_pengalaman_kerjas.pkj_nama_perusahaan}
                                </td>
                                <td>
                                  {ms_pengalaman_kerjas.pkj_tanggal_selesai}
                                </td>
                                <td>
                                  {ms_pengalaman_kerjas.pkj_tanggal_selesai}
                                </td>
                                <td>{ms_pengalaman_kerjas.pkj_lokasi}</td>
                                <td>
                                  {ms_pengalaman_kerjas.pkj_gambaran_pekerjaan}
                                </td>
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePagePengalamanKerjaChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Job Application Form</h1>
          <ol className="breadcrumb">
            <li className="active">Job Application Form</li>
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
                      <label>
                        Profile Picture{" "}
                        <font color="#ff0000">
                          {" "}
                          format file *png, jpg, jpeg
                        </font>
                      </label>
                      <input
                        className="input_imagem_artigo"
                        type="file"
                        required
                        name="pel_foto"
                        onChange={this.onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        required
                        name="pel_nama_lengkap"
                        onChange={this.handleNamaLengkapChange}
                        value={this.state.pel_nama_lengkap}
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>No KTP</label>
                      <input
                        type="text"
                        required
                        name="pel_email"
                        onChange={this.handleNoKtpChange}
                        value={this.state.pel_no_ktp}
                        className="form-control"
                        placeholder="Enter No KTP"
                      />
                    </div>
                    <div className="form-group">
                      <label>Position</label>
                      <select
                        className="form-control select2"
                        value={this.state.pel_posisi}
                        onChange={(event) =>
                          this.setState({ pel_posisi: event.target.value })
                        }
                      >
                        <option value="Staff">Staff</option>
                        <option value="Team Leader">Team Leader</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Manager">Manager</option>
                        <option value="General Manager">General Manager</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        required
                        name="pel_tanggal_lahir"
                        onChange={this.handleTanggalLahirChange}
                        value={this.state.pel_tanggal_lahir}
                        className="form-control"
                        placeholder="Enter Date of Birth"
                      />
                    </div>
                    <div className="form-group">
                      <label>Place of Birth</label>
                      <input
                        type="text"
                        required
                        name="pel_tempat_lahir"
                        onChange={this.handleTempatLahirChange}
                        value={this.state.pel_tempat_lahir}
                        className="form-control"
                        placeholder="Enter Place of Birth"
                      />
                    </div>
                    <div className="form-group">
                      <label>Nationality</label>
                      <input
                        type="text"
                        required
                        name="pel_tempat_lahir"
                        onChange={this.handleKewarganegaraanChange}
                        value={this.state.pel_kewarganegaraan}
                        className="form-control"
                        placeholder="Enter Nationality"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        required
                        name="pel_tempat_lahir"
                        onChange={this.handleEmailChange}
                        value={this.state.pel_email}
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        required
                        name="pel_tempat_lahir"
                        onChange={this.handleNoTeleponChange}
                        value={this.state.pel_no_telepon}
                        className="form-control"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea
                        type="text"
                        required
                        name="pel_alamat"
                        onChange={this.handleAlamatChange}
                        value={this.state.pel_alamat}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Parent's Phone Number</label>
                      <input
                        type="text"
                        required
                        name="pel_tempat_lahir"
                        onChange={this.handleNoTeleponOrtuChange}
                        value={this.state.pel_no_telepon_ortu}
                        className="form-control"
                        placeholder="Enter Parent's Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label>Parent's Address</label>
                      <textarea
                        type="text"
                        required
                        name="pel_alamat"
                        onChange={this.handleAlamatOrtuChange}
                        value={this.state.pel_alamat_ortu}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Parent's Address"
                      />
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="form-group">
                      <label>
                        Uraikan dengan singkat mengapa Anda memilh jurusan
                        tersebut di Perguruan Tinggi :
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_alasan_memilih_jurusan"
                        onChange={this.handleAlasanMemilihJurusanChange}
                        value={this.state.pel_alasan_memilih_jurusan}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Alasan Memilih Jurusan"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Sebutkan karya ilmiah yang pernah Anda buat :{" "}
                        <font color="#ff0000">
                          {" "}
                          *(skripsi, artikel, karya tulis, dll)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_karya_ilmiah"
                        onChange={this.handleKaryaIlmiahChange}
                        value={this.state.pel_karya_ilmiah}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Karya Ilmiah"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Sebutkan Pendidikan Non-Formal yang Diikuti :
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_pendidikan_non_formal"
                        onChange={this.handlePendidikanNonFormalChange}
                        value={this.state.pel_pendidikan_non_formal}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Pendidikan Non Formal yang Diikuti"
                      />
                    </div>
                    <div className="form-group">
                      <label>Sebutkan Bahasa Asing yang Dikuasai :</label>
                      <textarea
                        type="text"
                        required
                        name="pel_bahasa"
                        onChange={this.handleBahasaChange}
                        value={this.state.pel_bahasa}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Bahasa Asing yang Dikuasai"
                      />
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="form-group">
                      <label>Status Hubungan</label>
                      <select
                        className="form-control select2"
                        value={this.state.pel_status_pernikahan}
                        onChange={(event) =>
                          this.setState({
                            pel_status_pernikahan: event.target.value,
                          })
                        }
                      >
                        <option value="Single">Single</option>
                        <option value="Tunangan">Tunangan</option>
                        <option value="Menikah">Menikah</option>
                        <option value="Bercerai">Bercerai</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Tanggal Status Hubungan</label>
                      <input
                        type="date"
                        required
                        name="pel_tanggal_status_pernikahan"
                        onChange={this.handleTanggalStatusPernikahanChange}
                        value={this.state.pel_tanggal_status_pernikahan}
                        className="form-control"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Susunan Anggota Keluarga :{" "}
                        <font color="#ff0000">
                          {" "}
                          *(Istri/Suami dan Anak-anak)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_susunan_keluarga"
                        onChange={this.handleSusunanKeluargaChange}
                        value={this.state.pel_susunan_keluarga}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Susunan Anggota Keluarga"
                      />
                    </div>
                  </div>

                  <div className="box-body">
                    <div className="form-group">
                      <label>
                        Sebutkan siapa yang pernah menjadi atasan :
                        <font color="#ff0000">
                          {" "}
                          *(Nama Atasan, Jabatan, Nama Perusahaan dan Jumlah
                          Bawahan)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_detail_atasan_bawahan"
                        onChange={this.handleDetailAtasanBawahanChange}
                        value={this.state.pel_detail_atasan_bawahan}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Atasan Anda"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Masalah penting apa saja yang pernah Anda hadapi, dan
                        bagaimana mengatasinya?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_masalah_dihadapi"
                        onChange={this.handleMasalahDihadapiChange}
                        value={this.state.pel_masalah_dihadapi}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Masalah yang pernah dihadapi dan cara mengatasinya"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Ceritakan pandangan/kesan Anda terhadap perusahaan yang
                        pernah anda tempati
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_kesan_kerja"
                        onChange={this.handleKesanKerjaChange}
                        value={this.state.pel_kesan_kerja}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Pandangan/Kesan Anda Terhadap Perusahaan yang pernah anda tempati"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Pernahkah anda melakukan pembaharuan/perubahan di
                        perusahaan yang pernah anda tempati?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_inovasi_kerja"
                        onChange={this.handleInovasiKerjaChange}
                        value={this.state.pel_inovasi_kerja}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter pembaharuan/perubahan yang pernah dilakukan di perusahaan yang pernah anda tempati"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Siapakah yang mendorong anda hingga sampai taraf
                        kemajuan seperti sekarang ini?
                      </label>
                      <input
                        type="text"
                        required
                        name="pel_orang_yang_mendorong"
                        onChange={this.handleOrangYangMendorongChange}
                        value={this.state.pel_orang_yang_mendorong}
                        className="form-control"
                        placeholder="Enter orang yang mendorong anda hingga taraf kemajuan saat ini"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Bagaimana bila anda menghadapi persoalan dalam pekerjaan
                        dan harus mengambil keputusan?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_case_keputusan"
                        onChange={this.handleCaseKeputusanChange}
                        value={this.state.pel_case_keputusan}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter cara menghadapi persoalan dalam pekerjaan dan mengambil keputusan"
                      />
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="form-group">
                      <label>Uraikan apa yang menjadi cita-cita anda</label>
                      <textarea
                        type="text"
                        required
                        name="pel_cita_cita"
                        onChange={this.handleCitaCitaChange}
                        value={this.state.pel_cita_cita}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Cita-Cita Anda"
                      />
                    </div>
                    <div className="form-group">
                      <label>Apa yang mendorong Anda ingin bekerja :</label>
                      <textarea
                        type="text"
                        required
                        name="pel_hal_mendorong_bekerja"
                        onChange={this.handleHalMendorongBekerjaChange}
                        value={this.state.pel_hal_mendorong_bekerja}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter hal yang mendorong anda untuk bekerja"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Mengapa Anda ingin bekerja di Perusahaan kami?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_alasan_ingin_bekerja"
                        onChange={this.handleAlasanInginBekerjaChange}
                        value={this.state.pel_alasan_ingin_bekerja}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter alasan ingin bekerja di Perusahaan ini"
                      />
                    </div>
                    <div className="form-group">
                      <label>Sebutkan gaji yang Anda inginkan :</label>
                      <input
                        type="text"
                        required
                        name="pel_gaji_diharapkan"
                        onChange={this.handleGajiDiharapkanChange}
                        value={this.state.pel_gaji_diharapkan}
                        className="form-control"
                        placeholder="Enter gaji yang Anda inginkan"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Sebutkan fasilitas lainnya yang Anda harapkan :
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_fasilitas_diharapkan"
                        onChange={this.handleFasilitasDiharapkanChange}
                        value={this.state.pel_fasilitas_diharapkan}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter fasilitas yang diharapkan"
                      />
                    </div>
                    <div className="form-group">
                      <label>Kapan Anda dapat mulai bekerja :</label>
                      <input
                        type="text"
                        required
                        name="pel_kapan_mulai_kerja"
                        onChange={this.handleKapanMulaiBekerjaChange}
                        value={this.state.pel_kapan_mulai_kerja}
                        className="form-control"
                        placeholder="Enter waktu anda dapat mulai bekerja"
                      />
                    </div>
                    <div class="box">
                      <div class="box-body">
                        <table
                          id="example2"
                          class="table table-bordered table-hover"
                        >
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Jenis Pekerjaan</th>
                              <th>No</th>
                              <th>Jenis Pekerjaan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Marketing</td>
                              <td>6</td>
                              <td>HRD</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Finance</td>
                              <td>7</td>
                              <td>Administrasi</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Accounting</td>
                              <td>8</td>
                              <td>Management Trainee</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Audit</td>
                              <td>9</td>
                              <td>Legal</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Lain-lain</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Pilih jenis pekerjaan berikut sesuai dengan prioritas
                        pekerjaan yang Anda minati :
                        <font color="#ff0000"> *(Minimal 3 Jenis)</font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_urutan_jenis_pekerjaan"
                        onChange={this.handleUrutanJenisPekerjaanChange}
                        value={this.state.pel_urutan_jenis_pekerjaan}
                        className="form-control"
                        rows={3}
                        cols={3}
                        placeholder="Enter 3 jenis pekerjaan"
                      />
                    </div>
                    <div className="form-group">
                      <label>Lingkungan kerja yang disenangi :</label>
                      <select
                        className="form-control select2"
                        value={this.state.pel_lingkungan_kerja_diminati}
                        onChange={(event) =>
                          this.setState({
                            pel_lingkungan_kerja_diminati: event.target.value,
                          })
                        }
                      >
                        <option value="Lapangan">Lapangan</option>
                        <option value="Kantor">Kantor</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Bersediakah Anda ditempatkan diluar daerah?</label>
                      <select
                        className="form-control select2"
                        value={this.state.pel_bersedia_diluar_daerah}
                        onChange={(event) =>
                          this.setState({
                            pel_bersedia_diluar_daerah: event.target.value,
                          })
                        }
                      >
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Sebutkan tipe orang yang Anda senangi :</label>
                      <input
                        type="text"
                        required
                        name="pel_tipe_orang_disenangi"
                        onChange={this.handleTipeOrangDisenangiChange}
                        value={this.state.pel_tipe_orang_disenangi}
                        className="form-control"
                        placeholder="Enter tipe orang yang disenangi"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Terhadap hal apa Anda sulit mengambil keputusan?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_hal_sulit_mengambil_keputusan"
                        onChange={this.handleHalSulitMengambilKeputusanChange}
                        value={this.state.pel_hal_sulit_mengambil_keputusan}
                        className="form-control"
                        rows={3}
                        cols={3}
                        placeholder="Enter hal tersulit dalam mengambil keputusan"
                      />
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="form-group">
                      <label>
                        Adakah kenalan Anda di perusahaan Astra Group?{" "}
                        <font color="#ff0000">
                          {" "}
                          *(Nama Kenalan, Nama Perusahaan, Jabatan, No Telepon
                          dan Hubungan)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_kenalan_di_perusahaan_astra"
                        onChange={this.handleKenalanDiPerusahaanAstraChange}
                        value={this.state.pel_kenalan_di_perusahaan_astra}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter kenalan dalam perusahaan Astra Group"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Sebutkan referensi Anda di luar perusahaan kami :
                        <font color="#ff0000">
                          {" "}
                          *(Nama Perusahaan, Jabatan dan No Telepon)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_referensi_perusahaan"
                        onChange={this.handleReferensiPerusahaanChange}
                        value={this.state.pel_referensi_perusahaan}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter referensi perusahaan lain"
                      />
                    </div>
                    <div className="form-group">
                      <label>Hobby/Kegemaran Anda :</label>
                      <textarea
                        type="text"
                        required
                        name="pel_hobi"
                        onChange={this.handleHobiChange}
                        value={this.state.pel_hobi}
                        className="form-control"
                        rows={2}
                        cols={2}
                        placeholder="Enter hobby/Kegemaran Anda"
                      />
                    </div>
                    <div className="form-group">
                      <label>Bagaimana cara Anda mengisi waktu luang?</label>
                      <textarea
                        type="text"
                        required
                        name="pel_cara_mengisi_waktu_luang"
                        onChange={this.handleCaraMengisiWaktuLuangChange}
                        value={this.state.pel_cara_mengisi_waktu_luang}
                        className="form-control"
                        rows={3}
                        cols={3}
                        placeholder="Enter cara anda mengisi waktu luang"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Organisasi yang pernah Anda ikuti :
                        <font color="#ff0000">
                          {" "}
                          *(Nama Organisasi, Tempat, Jabatan, Tahun Menjabat)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_organisasi_diikuti"
                        onChange={this.handleOrganisasiDiikutiChange}
                        value={this.state.pel_organisasi_diikuti}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Organisasi yang Anda ikuti"
                      />
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="form-group">
                      <label>
                        Pernahkah Anda mengikuti psikotest sebelumnya?
                        <font color="#ff0000">
                          {" "}
                          *(Waktu, Tempat dan Tujuan)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_psikotes"
                        onChange={this.handlePsikotesChange}
                        value={this.state.pel_psikotes}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter Psikotes yang pernah anda ikuti"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Apa yang menjadi kekuatan (strong point) Anda?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_kekuatan"
                        onChange={this.handleKekuatanChange}
                        value={this.state.pel_kekuatan}
                        className="form-control"
                        rows={3}
                        cols={3}
                        placeholder="Enter Kekuatan Anda"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        3. Apa yang Anda rasakan perlu diperbaiki (weak point)
                        pada diri Anda?
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_kelemahan"
                        onChange={this.handleKelemahanChange}
                        value={this.state.pel_kelemahan}
                        className="form-control"
                        rows={3}
                        cols={3}
                        placeholder="Enter Kelemahan Anda"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Pernahkah Anda menderita sakit yang lama sembuh?
                        <font color="#ff0000">
                          {" "}
                          *(Nama Penyakit, Lama Sakit dan Akibatnya)
                        </font>
                      </label>
                      <textarea
                        type="text"
                        required
                        name="pel_riwayat_penyakit"
                        onChange={this.handleRiwayatPenyakitChange}
                        value={this.state.pel_riwayat_penyakit}
                        className="form-control"
                        rows={5}
                        cols={5}
                        placeholder="Enter penyakit yang pernah diderita"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Diisi dengan sesungguhnya, Apabila dikemudian hari
                        ternyata ada hal-hal yang bertentangan, maka saya
                        bersedia dituntut sesuai dengan hukuman yang berlaku dan
                        lamaran ini dapat dibatalkan.
                      </label>
                      <input
                        type="text"
                        required
                        readOnly
                        name="pel_persetujuan"
                        onChange={this.handlePersetujuanChange}
                        value={"Ya"}
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Save Data
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

export default PelamarFormulirLamaranKerja;
