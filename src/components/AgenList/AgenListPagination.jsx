import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { AgenItemWrapperStyle, ContactStyle, GenderStyle, NameStyle } from './AgenListPaginationStyles';
import { Link } from 'react-router-dom';
import { DeleteForever, Edit } from '@mui/icons-material';
import "./paginationStyle.css"
import { ModalDeleteAgen } from './ModalDeleteAgen/ModalDeleteAgen';
import useGetData from '../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';

export const AgenListPagination = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const {getData, isLoading: getLoading, data: fetchedData, setData: setFetchedData, error: getError, setError: setGetError } = useGetData();
    const {deleteData, isLoading: deleteLoading, msg: deleteMsg, setMsg: setDeleteMsg, error: deleteError, setError: setDeleteError } = useDeleteData();

    useEffect(()=>{
      getData("https://localhost:44366/api/Agen/GetAllAgen", "getAgen");
    },[])

    const handleDelete = (deleteIndex)=>{
      deleteData(
        `https://localhost:44366/api/Agen/DeleteAgen?Id=${deleteIndex}`,
        "deleteAgen",
        fetchedData,
        setFetchedData,
        deleteIndex
      )
      setPageNumber(0)
    }

    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    
    const displayUsers = fetchedData
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user) => {
        return (
                <Box key={user.id} sx={AgenItemWrapperStyle} >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'}>
                        <Link to={`/agen/${user.id}`} style={{textDecoration:'none', color:'inherit', flexGrow:1}} >
                            <Typography sx={NameStyle}>{user.name}</Typography>
                            <Typography sx={GenderStyle}>{user.gender}</Typography>
                            <Typography sx={ContactStyle}>{user.email}</Typography>
                            <Typography sx={ContactStyle}>{user.phone}</Typography>
                            <Typography sx={ContactStyle}>ID Card : {user.idCard}</Typography>
                        </Link>
                        <Stack direction={'row'} gap={0}>
                            <Link to={`/edit-agen/${user.id}`}>
                            <button style={{padding:'8px', border:'none', display:'flex', justifyContent:'center', cursor:'pointer', background:'transparent'}}>
                                <Edit color='secondary' />
                            </button>
                            </Link>
                            <button style={{padding:'8px', border:'none', display:'flex', justifyContent:'center', cursor:'pointer', background:'transparent'}}
                            onClick={()=>{
                              setDeleteId(user.id)
                              setModalDeleteOpen(true)}}
                            >
                                <DeleteForever color='warning' />
                            </button>
                        </Stack>
                    </Stack>
                </Box>
        );
      });
  
    const pageCount = Math.ceil(fetchedData.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  
    return (
      <div>
        <Stack gap={'1rem'} mb={"5rem"}>
            {displayUsers}
        </Stack>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
        <ModalDeleteAgen modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} handleDelete={handleDelete} deleteId={deleteId} />
      </div>
    );
}
