import React from 'react';

const Table = ({
  queryCur,
  sortType,
  users,
  actAttr,
  activePage,
  maxRowsPerPage,
  activeUser,
  handleDelete,
  handleEdit,
  handleSort
}) => {
  const displayUser = (
    queryCur,
    sortType,
    users,
    actAttr,
    activePage,
    maxRowsPerPage
  ) => {
    return activeUser(queryCur, sortType, users, actAttr).slice(
      (activePage - 1) * maxRowsPerPage,
      activePage * maxRowsPerPage
    );
  };

  const showOrder = attr => {
    return (
      actAttr === attr &&
      (sortType === 1 ? (
        <i className='fas fa-arrow-up sort' />
      ) : (
        sortType === 2 && <i className='fas fa-arrow-down sort' />
      ))
    );
  };

  return (
    <div>
      <table className='table table-sm'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Edit</th>
            <th scope='col'>Action
            
            </th>
            <th scope='col' id='firstname' onClick={e => handleSort(e)}>
              First Name {showOrder('firstname')}
            </th>
            <th scope='col' id='lastname' onClick={e => handleSort(e)}>
              Last Name {showOrder('lastname')}
            </th>
            <th scope='col' id='sex' onClick={e => handleSort(e)}>
              Sexe {showOrder('sex')}
            </th>
            <th scope='col' id='age' onClick={e => handleSort(e)}>
              Age {showOrder('age')}
            </th>
            <th scope='col' id='email' onClick={e => handleSort(e)}>
              email
            </th>
          </tr>
        </thead>

        <tbody>
          {displayUser(
            queryCur,
            sortType,
            users,
            actAttr,
            activePage,
            maxRowsPerPage
          ).map(user => {
            return (
              <tr className='user' key={user._id}>
                <td>
                  <button
                    className='btn btn-outline-primary btn-sm'
                    onClick={e => handleEdit(user._id)}
                  >
                    <i className='fas fa-pen' /> Edit
                  </button>
                </td>
                <td style={{display:'flex'}}>

                  
                <i type="icon" class="btn btn-success m-1" >Accept(i)</i>
                <i type="icon" class="btn btn-danger m-1" onClick={e => handleDelete(user._id)}>Refuse</i>
                <i type="icon" class="btn btn-info m-1">info(i)</i>
                 
                </td>
                <td>
                  <div className='table-data'>{user.firstname?user.firstname:'user'}</div>
                </td>
                <td>
                  <div className='table-data'>{user.lastname?user.lastname:'user'}</div>
                </td>
                <td>
                  <div className='table-data'>{user.sex?user.sex:'m'}</div>
                </td>
                <td>
                  <div className='table-data'>{user.age?user.age:25}</div>
                </td>
                <td>
                  <div className='table-data'>admin@keyrus.tn</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div>{users.length}</div> */}
    </div>
  );
};

export default Table;
