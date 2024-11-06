import React from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import '../assets/components/DataTable.scss';

// Composant pour la barre de recherche globale dans le tableau
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <input
      value={globalFilter || ''}
      onChange={(e) => setGlobalFilter(e.target.value)}
      placeholder="Search..."
      className="global-search"
    />
  );
};

// Composant principal du tableau avec filtrage, tri et pagination
const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Données de la page actuelle (pagination)
    prepareRow,
    state,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns, // Définit les colonnes du tableau
      data,    // Données affichées dans le tableau
      initialState: { pageSize: 10 }, // Nombre initial de lignes par page
    },
    useGlobalFilter, // Activation de la recherche globale
    useSortBy,       // Activation du tri par colonne
    usePagination    // Activation de la pagination
  );

  const { globalFilter, pageIndex, pageSize } = state; // État de la recherche globale, de la page actuelle et de la taille de page

  return (
    <div className="data-table-container">
      {/* Barre de recherche globale */}
      <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

      {/* Sélecteur pour le nombre de lignes affichées */}
      <div className="page-size-container">
        Show{' '}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="page-size-select"
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={data.length}>All</option>
        </select>{' '}
        entries
      </div>

      {/* Tableau principal */}
      <table {...getTableProps()} className="employee-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼' // Affiche la flèche descendante si trié en ordre décroissant
                        : ' ▲' // Affiche la flèche ascendante si trié en ordre croissant
                      : ' ⇵'} {/* Indicateur neutre pour les colonnes non triées */}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => { // Affiche uniquement les lignes de la page actuelle
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Contrôles de pagination */}
      <div className="pagination-controls">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page <strong>{pageIndex + 1} of {pageOptions.length}</strong> {/* Affiche la page actuelle */}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
