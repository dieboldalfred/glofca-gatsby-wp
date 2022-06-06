// TableContainer.js
import React, { Fragment } from "react"
import { useTable, useSortBy, useFilters, useExpanded } from "react-table"
import { Table } from "reactstrap"
import { Filter, DefaultColumnFilter } from "../../utils/filters"

// https://medium.com/@thewidlarzgroup/react-table-7-sorting-filtering-pagination-and-more-6bc28af104d6

const TableContainer = ({ columns, data, renderRowSubComponent }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
    },
    useFilters,
    useSortBy,
    useExpanded
  )

  const generateSortingIndicator = column => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
  }

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                <div {...column.getSortByToggleProps()}>
                  {column.render("Header")}
                  {generateSortingIndicator(column)}
                </div>
                <Filter column={column} />
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <Fragment key={row.getRowProps().key}>
              <tr>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
              {row.isExpanded && (
                <tr>
                  <td colSpan={visibleColumns.length}>
                    {renderRowSubComponent(row)}
                  </td>
                </tr>
              )}
            </Fragment>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableContainer
