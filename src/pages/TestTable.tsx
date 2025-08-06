import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'

const TestTable = () => {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="p-8">
        <h2>Test Table Rendering</h2>
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1 Data 1</td>
              <td>Row 1 Data 2</td>
            </tr>
            <tr>
              <td>Row 2 Data 1</td>
              <td>Row 2 Data 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MDXProvider>
  )
}

export default TestTable
