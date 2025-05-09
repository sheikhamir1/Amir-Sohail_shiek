import React from "react";

export function BackEnd() {
  return (
    <div id="backend-content" className="tech-content ">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Backend Development
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
          {/* <!-- Node.js --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Node.js
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          {/* <!-- Express.js --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.975-5.248c.623-3.388 1.345-6.73 2.538-9.956.41-1.08.75-1.172 1.512-.624a30.414 30.414 0 0 1 4.745 3.85c.522.488.854.426 1.297-.094a15.182 15.182 0 0 1 2.58-2.4c.8-.583 1.39-.424 1.713.518 2.32 6.775 2.913 13.686 2.048 20.8-.08.668-.477 1.008-1 .876-.533-.136-1.07-.372-1.566-.63-.38-.2-.73-.16-1.102.07-1.68 1.04-3.444 1.915-5.39 2.444-.736.2-1.05-.032-1.197-.746-.74-3.59-1.83-7.09-3.453-10.4-.883-1.81-1.88-3.566-3.225-5.073-.516-.578-.48-.964-.06-1.535l.602 1.123c1.18 2.14 2.37 4.274 3.14 6.582.756 2.27 1.266 4.61 1.776 6.947.16.732.45.792 1.104.37 2.014-1.296 3.49-3.053 4.374-5.3.208-.53.224-1.18.196-1.777-.116-2.51-1.157-4.675-2.616-6.64-.532-.714-1.16-1.35-1.745-2.02-.274-.313-.537-.65-.873-1.06l.507-.038c2.13-.235 4.253-.135 6.34.33a5.19 5.19 0 0 0 .672.114c.95.1 1.072.374.297 1.043a10.727 10.727 0 0 1-2.145 1.588c-.657.374-.7.644-.19 1.325 1.61 2.15 2.45 4.596 2.64 7.26.86 12.54-10.184 15.35-17.386 13.605-.175-.043-.35-.143-.507-.122a.465.465 0 0 0-.367.34c-.05.252.183.5.323.75l.348.11c2.766.763 5.562.934 8.37.58 6.44-.81 11.347-3.84 13.317-10.343 1.267-4.183.034-9.743-3.675-13.89C23.566 3.574 20.366 2.03 16.8 1.388a22.753 22.753 0 0 0-5.664-.115c-5.042.414-9.323 2.366-12.396 6.32-2.84 3.65-3.436 7.866-2.75 12.345.15.952.4 1.88.74 2.94-.114-.937-.14-1.712-.126-2.485a27.272 27.272 0 0 1 .493-5.484c.384-1.927.874-3.83 1.45-5.708.648-2.13 1.333-4.256 2.05-6.36.318-.934.74-1.837 1.13-2.78.098.02.145.014.152.034.094.25.18.504.258.76l-1.134 4.983c-.554 2.07-1.198 4.11-1.686 6.2-.346 1.483-.547 3-.817 4.5z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Express.js
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-gray-800 dark:bg-gray-400 h-1.5 rounded-full"
                style={{ width: "88%" }}
              ></div>
            </div>
          </div>

          {/* <!-- MongoDB --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.802-.436-1.222-.105-.558-.105-1.133-.105-1.7 0-.506 0-1.01.07-1.5.07-.53.052-1.06-.072-1.58-.173-.616-.423-1.2-.767-1.76-.575-.905-1.215-1.77-1.9-2.598-.21-.28-.558-.487-.627-.83-.07-.383.174-.523.436-.662.76-.35 1.456-.82 2.153-1.308.21-.14.366-.36.488-.575.468-.767.837-1.57 1.047-2.418.314-1.37.314-2.737-.105-4.106-.28-.906-.767-1.73-1.342-2.453-.59-.767-1.343-1.394-2.154-1.96-.21-.14-.384-.35-.558-.523-.243-.278-.47-.557-.662-.87-.07-.105-.183-.192-.21-.383zm-3.054 8.8c-.06-.12-.137-.23-.228-.347l-.347-.382c-.585-.632-1.1-1.333-1.512-2.102-1.013-1.9-1.427-4.01-1.306-6.13.037-.718.12-1.431.347-2.126.14-.438.155-.68-.174-.96-.347-.302-.382-.645-.94-.76-.58-.127-1.2-.652-1.84-.175S6.2.874 5.958 1.273c-.227.4-.436.838-.575 1.292-.28.89-.468 1.8-.558 2.72-.243 2.453 0 4.853.906 7.132.255.627.542 1.256.976 1.764l.208.3c.255.338.24.414-.255.737-.297.196-.553.454-.766.766-.505.77-.856 1.648-1.083 2.567-.314 1.308-.314 2.65 0 3.957.314 1.308.976 2.453 1.865 3.415.433.487.924.94 1.448 1.36.347.227.765.42 1.083.662.153.105.334.21.4.42.06.174-.048.35-.133.49-.087.14-.21.243-.347.313-.78.262-.827 1.74-.106 2.095.21.087.366.156.533.21.347.106.662.072.976-.106.145-.86.27-.2.37-.327.263-.402.453-.873.567-1.363.37-1.255.152-2.532-.566-3.618-.21-.313-.21-.522 0-.8.563-.755 1.1-1.53 1.517-2.372.21-.4.4-.836.513-1.292.105-.385.07-.77-.07-1.156-.07-.21-.183-.4-.296-.59-.21-.384-.488-.645-.767-.94-.494-.546-1.01-1.083-1.413-1.67-.452-.766-.835-1.607-1.032-2.453-.07-.314-.087-.627-.087-.906-.016-.767.07-1.516.244-2.283.033-.156.102-.295.2-.41.21-.244.4-.487.644-.662.174-.07.296-.07.366.157.07.244.104.488.174.732.07.5.244.94.488 1.34.105.243.28.453.453.662.384.43.802.836 1.2 1.25.42.42.906.767 1.396 1.117.073.033.14.078.197.132.166.14.314.297.419.47.105.227.07.4-.105.627-.21.243-.487.4-.767.54-.28.142-.54.296-.8.47-.167.14-.314.315-.418.523-.244.454-.383.94-.418 1.448-.106.767-.035 1.5.244 2.21.144.35.328.683.557.98.194.21.42.383.663.524.244.152.244.152.069.384z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              MongoDB
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-green-600 dark:bg-green-500 h-1.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* <!-- GraphQL --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.428 1.299c-.812 0-1.312.685-1.312 1.377v1.004a7.913 7.913 0 00-5.261 3.04l-.87-.504a1.184 1.184 0 00-1.623.433L2.28 8.721a1.184 1.184 0 00.433 1.623l.867.503a7.916 7.916 0 000 6.078l-.867.5a1.184 1.184 0 00-.433 1.624l1.082 2.073a1.184 1.184 0 001.623.432l.87-.503a7.913 7.913 0 005.261 3.04v1.004c0 .692.5 1.377 1.312 1.377h2.144c.812 0 1.312-.685 1.312-1.377V23.09a7.913 7.913 0 005.26-3.04l.87.504a1.184 1.184 0 001.624-.433l1.082-2.072a1.184 1.184 0 00-.433-1.624l-.867-.5a7.916 7.916 0 000-6.078l.867-.503a1.184 1.184 0 00.433-1.623l-1.082-2.073a1.184 1.184 0 00-1.623-.433l-.87.504a7.913 7.913 0 00-5.261-3.04V2.676c0-.692-.5-1.377-1.312-1.377h-2.144zm1.07 7.812c1.678 0 3.157.646 4.034 1.636h-8.07c.879-.99 2.358-1.636 4.035-1.636zm-3.943 2.846h7.888v1.208H9.555v-1.208zm0 2.417h7.888v1.211H9.555v-1.211zm0 2.42h7.888c-.879.99-2.358 1.636-4.034 1.636-1.678 0-3.157-.646-4.035-1.636h.18z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              GraphQL
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-pink-600 dark:bg-pink-500 h-1.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* <!-- Python --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Python
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          {/* <!-- Firebase --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.89 15.673L6.255.461A.542.542 0 017.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 00-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 001.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984 14.3 7.148z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              Firebase
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-yellow-600 dark:bg-yellow-500 h-1.5 rounded-full"
                style={{ width: "82%" }}
              ></div>
            </div>
          </div>

          {/* <!-- PostgreSQL --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0499.7982-3.5508.1899-4.497-.9032-1.4054-2.2053-1.5442-2.5991-1.5442-.3951 0-1.1012.0877-1.6902.4212-.5928-.3351-1.3418-.5298-2.1555-.5298-1.2869 0-2.5324.5761-3.5458 1.6273-.5962-.1822-2.2248-.5905-3.5342-.1-.6576.2472-1.1886.7487-1.5783 1.4896-.3897-.125-.8440996-.1822-1.3198996-.1616-.7373.0317-1.4798.3388-2.1354.8818C4.2358 5.1587 3.6895 5.7353 3.312 6.4245c-.3371.6129-.5201 1.3351-.5201 2.0726 0 .1425.0094.2849.0284.4273-.254.0651-.6684.2165-.9523.5347-.3538.3946-.502.9472-.4461 1.6549.056.7056.2798 1.4803.6042 2.105.1804.3426.1878.4239.1196.775-.264.1388-.5695.3128-.7499.5479-.09.1172-.1995.2947-.1995.5129 0 .1552.0437.3138.1341.4892.1746.3395.5494.5128 1.114.5128.1073 0 .2197-.0062.3377-.0172 1.7036-.1576 2.6493.0633 3.1461.291-.094.3716-.283.75-.4999 1.0841-.2229.3449-.4555.7018-.6249 1.0604-.1902.4035-.3045.7891-.3045 1.0827 0 .2857.1046.5398.304.7362.1995.1964.4722.3099.7669.3099.4722 0 .9878-.253 1.3644-.5131.3743-.2572.7713-.6978 1.2195-1.3511.1513.3035.5157.5986 1.2787.5986.1356 0 .2851-.0094.4515-.0313.6325-.0772 1.0889-.2633 1.4259-.583.3255-.3079.5177-.7459.5744-1.3034.0058-.0569.0091-.1159.0102-.1761.4374.02.9389.0313 1.5402.0313 1.0812 0 1.9058-.0671 2.4598-.1996.7938-.19 1.5161-.5768 1.9655-1.0587.2967-.3166.4949-.6893.5698-1.0732.0346-.1778.0209-.3558-.0406-.5268m-1.981-10.338c.5326-.0282 1.2608.1324 1.6646.7333.4833.7198.2987 2.3932-.08 3.6432-.4343 1.4281-1.1761 3.0533-1.9219 4.5098-.1312-.3564-.3581-.7339-.6752-1.0364-.3903-.3731-.9297-.6524-1.598-.8279.5995-1.8406 1.0346-3.7953 1.2869-5.0124.1909-.9216.2499-1.6273.3056-1.9857l-.0009-.0001c.025-.1626.0438-.28.0784-.334.0355-.0561.0689-.0561.0094-.0561.1196-.0538.6035-.2695.9312-.2337m-6.4232.7584c.3903.0222.7493.1203 1.0754.2924-.507.4753-.9968 1.0555-1.4788 1.7459-.0338-.2009-.0739-.3986-.1204-.5919-.2188-.9278-.5337-1.5046-.6277-1.6753.3523.0718.7528.1629 1.1515.2289m-.1977 8.3246c-.0682.3924-.108.6999-.5609 1.2185-.4343.4951-.9332.7072-1.2099.7072-.0619 0-.1116-.0107-.1512-.0328-.0902-.0517-.1344-.1434-.1376-.2816-.019-.7584.7756-1.5569 1.3665-1.8431.2298-.1114.4544-.1747.6646-.1958.0311.1454.0595.290922.0851.4353l-.0566-.0077zm-5.6227-8.4045c.9857-.3708 2.5405.0678 3.1925.243-.075.0939-.188.2582-.3169.4846-.3676.6425-.7188 1.5062-.9035 2.2998-.2296 1.0028-.2387 2.0221-.2046 2.7452-.4249-.0855-.8655-.111-1.3043-.0429-.4608.0717-.8831.2347-1.2664.4446-.087-1.1213-.5417-4.5114.8032-6.1743m-2.7724 9.9722c-.5322.0772-1.0644.1337-1.5863.1694-.0768.0051-.1493.0078-.2177.0078-.238 0-.4485-.0379-.5276-.2288-.0394-.0951-.022-.1855.0517-.2643.1502-.1638.5836-.3094.5836-.3094s1.2608-.5286 2.2565-1.6702c.091-.105.1784-.2133.2602-.3211.3-.0389.561-.05.7875-.033.1284.0097.2518.0333.3718.0717-.2698.8114-.7296 2.1483-1.9797 2.5779m6.3939 2.2722c-.2015.1891-.4298.2795-.6941.2795-.1578 0-.3419-.0421-.5632-.1332l-.0134-.0056c-.1393-.058-.1959-.1367-.1959-.2337 0-.0833.0405-.194.1171-.319.1622-.2642.3782-.5103.5844-.7514.2276-.2653.4638-.5397.6362-.8315.0134.057.0295.1135.049.1689.0823.2349.2062.4201.35.5335-.091.1088-.1899.2144-.299.3199-.1284.1268-.2673.2507-.4151.3736m5.4991-.6761c-.1942.0293-.3824.0429-.5683.0429-.3766 0-.7242-.0535-1.0938-.1133.033-.1159.0451-.2343.0347-.3538-.0231-.2535-.1204-.4757-.2889-.6596-.1708-.1873-.4297-.3372-.7748-.4466.0762-.2823.2091-.5991.3656-.8855.0481-.0877.0987-.1746.1501-.2605l.0009-.0002c.1046.022.2086.0461.3131.0731.1513.0397.3033.0836.4553.1307.3431.1061.6986.2159.9617.2236.1277.0039.2213-.0142.2952-.0561.0723-.0409.1301-.1061.1575-.1996.0404-.1365.0247-.3188-.0435-.5.073.0217.1447.0475.2164.0772.5417.2264.9994.602 1.03 1.1677.0134.2531-.1103.565-.4142.8152Z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              PostgreSQL
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* <!-- PHP --> */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg mb-3">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
              </svg>
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
              PHP
            </span>
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5 mt-2">
              <div
                className="bg-indigo-600 dark:bg-indigo-500 h-1.5 rounded-full"
                style={{ width: "65% " }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
