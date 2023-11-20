import { Box, FlexProps, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

export type PageUploadProps = FlexProps;
export const UploadCat: React.FC<PageUploadProps> = ({children}) => {
    return (
        <Box>
            {children}
            <Text>Upload cats</Text>
        </Box>
    )

}
