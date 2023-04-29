export const ScreenOrder = () => {
  return (
    <div className="w-full m-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold m-2">Orders</h2>
        <div className="bg-white shadow-md rounded my-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Customer Name</th>
                <th className="py-3 px-6 text-left">Order Date</th>
                <th className="py-3 px-6 text-left">Order Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">001</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  John Doe
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  2022-04-29
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  $150.00
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">002</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  Jane Smith
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  2022-04-30
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  $75.00
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">003</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  Bob Johnson
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  2022-05-01
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  $200.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
