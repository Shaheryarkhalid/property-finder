'use client';
import { Box } from "@mui/material";
import { useContext } from "react";
import { propertiesContext } from "@/components/ContextWrapper";

export default function DisplayProperties() {
    const { properties } = useContext(propertiesContext);
    
    return (
        <Box
            sx={{
                border: '1px solid black',
                height: '100%',
                overflow: 'auto',
                padding: '20px',
                borderRadius: '20px',
                fontFamily: 'monospace',  
                whiteSpace: 'pre-wrap',  
                wordWrap: 'break-word',  
                backgroundColor: '#f4f4f4'  
            }}
        >
            <pre>
                Total Properties: {properties.length+','}

            </pre>
            <pre>Properties
                {`${JSON.stringify(properties, null, 4)}`}
            </pre>
        </Box>
    );
}
