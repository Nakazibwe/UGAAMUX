/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
$(document).ready(() => {
  $('#sidebarCollapse').on('click', () => {
    $('#sidebar').toggleClass('active');
  });
});

$(document).ready(() => {
  let grid; let
    countries;
  grid = $('#grid').grid({
    dataSource: '/Players/Get',
    uiLibrary: 'bootstrap4',
    primaryKey: 'ID',
    inlineEditing: { mode: 'command' },
    columns: [
      { field: 'artistID', title: 'Artist ID', width: '70' },
      { field: 'firstName', title: 'First name', editor: true },
      {
        field: 'lastName', title: 'Last name', editField: 'artistID', editor: { dataSource: '/Locations/GetCountries', valueField: 'id' },
      },
      { field: 'stageName', title: 'Stage name', editor: true },
      { field: 'telephone', title: 'Telephone contact', editor: true },
      { field: 'twitter', title: 'Twitter', editor: true },
      { field: 'email', title: 'Email', editor: true },
      { field: 'basedDistrict', title: 'District', editor: true },
      { field: 'nationalIDNIN', title: 'NIN', editor: true },
      { field: 'datestartedsing', title: 'Career Start', editor: true },
      { field: 'nationalIDNIN', title: 'NIN', editor: true },
      {
        field: 'ArtistDOB', title: 'Date of Birth', type: 'date', editor: true,
      },

    ],
    pager: { limit: 5 },
  });
  grid.on('rowDataChanged', (e, id, record) => {
    // Clone the record in new object where you can format the data to format that is supported by the backend.
    const data = $.extend(true, {}, record);
    // Format the date to format that is supported by the backend.
    data.DateOfBirth = gj.core.parseDate(record.DateOfBirth, 'mm/dd/yyyy').toISOString();
    // Post the data to the server
    $.ajax({ url: '/Players/Save', data: { record: data }, method: 'POST' })
      .fail(() => {
        alert('Failed to save.');
      });
  });
  grid.on('rowRemoving', (e, $row, id, record) => {
    if (confirm('Are you sure?')) {
      $.ajax({ url: '/Players/Delete', data: { id }, method: 'POST' })
        .done(() => {
          grid.reload();
        })
        .fail(() => {
          alert('Failed to delete.');
        });
    }
  });
});
