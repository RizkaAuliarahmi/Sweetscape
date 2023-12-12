import { Box, Typography, Pagination } from "@mui/material";
import { MetaData } from "../models/pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'center', md: 'flex-start' }}
      justifyContent={{ xs: 'center', md: 'space-between' }}
      mt={5}
    >
      <Typography
        mb={{ xs: 2, md: 0 }}
        textAlign={{ xs: 'center', md: 'inherit' }}
      >
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{' '}
        of {totalCount} items
      </Typography>
      <Pagination
        color="primary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
        sx={{ mt: { xs: 2, md: 0 } }}
      />
    </Box>
  );
}
