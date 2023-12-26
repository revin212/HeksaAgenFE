export const AgenItemWrapperStyle = {
    px: {xs:"1rem", md:"2rem"},
    py: "1rem",
    borderRadius: "8px",
    backgroundColor: "white",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "rgba(242, 201, 76, 0.2)",
        "& button": {
            backgroundColor: "rgba(242, 201, 76, 0.2)",
        }
    }
}

export const NameStyle = {
    fontSize: "18px",
    fontWeight: "600",
}

export const GenderStyle = {
    fontSize: "14px",
    fontWeight: "400",
}

export const ContactStyle = {
    fontSize: "16px",
    fontWeight: "500",
    maxWidth: {xs:'calc(100vw - 40vw);', sm:'none'},
    wordWrap: 'break-word'
}