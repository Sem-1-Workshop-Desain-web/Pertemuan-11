import './App.css';

function App() {

  // Styling untuk elemen yang memiliki peringatan khusus
  const myStyle = {
    color: 'skyblue',
  };

  return (
    <div>
      {/* Parent Box - Bagian pertama dengan gambar dan deskripsi produk */}
      <div className="Parentbox">
        {/* Foto Produk */}
        <div className="Foto">
          <img src="background (1).jpg" alt="Background" />
        </div>

        {/* Deskripsi Produk */}
        <div className="Deskripsi" id="desk1">
          <p className="Cate">THE BEST ART</p>
          <p className="Title">NOVEMBER DONE</p>
          <p className="Price">
            Number: <span className="Price-color">#897879</span>
          </p>
          <p className="Info">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="Size">SIZE</p>
          {/* Tabel Ukuran */}
          <table cellpadding="10">
            <tr>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
            </tr>
          </table>
          {/* Tombol Pembelian dan Wishlist */}
          <button className="buttonBuy">BUY NOW</button>
          <button className="buttonWishlist">ADD TO WISHLIST</button>
          <p className="warning">*Only 1 Available</p>
        </div>
      </div>

      {/* Second Box - Bagian kedua dengan produk lain */}
      <div className="secondBox">
        {/* Foto Produk */}
        <div className="Foto">
          <img src="255-2559796_beats-ep-on-ear-headphones-clipart.png" alt="Headphones" />
        </div>

        {/* Deskripsi Produk */}
        <div className="Deskripsi" id="desk2">
          <p className="jenisProduk">HEADPHONES</p>
          <p className="Cate2">Beats EP</p>
          <p className="Info">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <hr />

          {/* Warna Produk */}
          <p className="Color">Color</p>
          <div className="Color">
            <div className="merah"></div>
            <div className="biru"></div>
            <div className="hitam"></div>
          </div>

          {/* Konfigurasi Kabel */}
          <p className="cable">Cable configuration</p>
          <button className="cableButton" id="leftButton">Straight</button>
          <button className="cableButton">Colled</button>
          <button className="cableButton">Long-colled</button>

          {/* Peringatan dan Petunjuk Konfigurasi */}
          <div className="buttomWarning">
            <p className="warning2" style={myStyle}>?</p>
            <span className="warningText">How to configurate your headphones</span>
          </div>

          <hr />

          {/* Harga dan Tombol Tambah ke Keranjang */}
          <div className="bottomPrice">
            <p className="harga">148$</p>
            <button className="addCart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
