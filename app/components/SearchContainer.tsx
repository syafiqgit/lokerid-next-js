export default function SearchContainer() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-72 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center p-7 text-center">
        <h1 className="text-5xl font-medium mb-4">Cari Lowongan Kerja</h1>
        <p className="text-2xl">Temukan pekerjaan yang akan Anda sukai.</p>
        <div className="mt-8 flex items-center gap-2">
          <input
            type="text"
            className="p-5 w-[475px]"
            placeholder="Posisi atau Perusahaan"
          />
          <select className="text-black p-5 w-[234px]">
            <option selected disabled>
              Semua Lokasi
            </option>
            <option value="">Posisi</option>
          </select>
          <button className="p-5 rounded-md bg-red-500">
            <svg
              className=""
              fill="#ffffff"
              height="24"
              width="24"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
