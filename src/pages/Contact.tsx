function Contact() {
  return (
    <>
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-8 border border-blue-200">
          
          <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
            Get in Touch
          </h2>

          <div className="text-center text-gray-600 mb-8">
            <p>Nakhpot-14, Lalitpur</p>
            <p>📞 977 9765022872</p>
            <p>📧 bijay3990@gmail.com</p>
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Telephone Number"
              className="p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button className="mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
