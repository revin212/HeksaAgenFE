export const agen = 
{
    "id": 1,
    "regDate": "2023-12-23T21:35:05.21",
    "regStatus": "Active",
    "name": "Revin",
    "gender": "Male",
    "birthPlace": "Bogor",
    "birthDate": "2023-12-22T00:00:00",
    "address": "Cibadak, Banjarsari",
    "email": "revinramadhan21@gmail.com",
    "phone": "081392109140",
    "idCard": "revin123",
    "createDate": "2023-12-23T21:35:05.21",
    "createBy": "Guest",
    "workExperiences": [
        {
            "id": 1,
            "agenID": 1,
            "company": "PT Mebiso",
            "field": "IT",
            "position": "Front End Developer Intern",
            "startDate": "2023-03-16T00:00:00",
            "endDate": "2023-08-30T00:00:00",
            "jobDesc": "2 Projects, rebranding & admin panel",
            "createDate": "2023-12-23T21:36:02.9166667",
            "createBy": "Guest"
        },
        {
            "id": 2,
            "agenID": 1,
            "company": "PT Mebiso",
            "field": "IT",
            "position": "Front End Developer Intern",
            "startDate": "2023-03-16T00:00:00",
            "endDate": "2023-08-30T00:00:00",
            "jobDesc": "2 Projects, rebranding & admin panel",
            "createDate": "2023-12-23T21:36:02.9166667",
            "createBy": "Guest"
        }
    ],
    "attachments": [
        {
            "id": 1,
            "agenID": 1,
            "attachmentType": "image",
            "fileType": "png",
            "fileName": "test.png",
            "filePath": "/images/test.png",
            "createDate": "2023-12-23T21:35:21.2233333",
            "createBy": "Guest"
        },
        {
            "id": 2,
            "agenID": 1,
            "attachmentType": "image",
            "fileType": "png",
            "fileName": "contoh-attachment-revin-123456.png",
            "filePath": "/images/test.png",
            "createDate": "2023-12-23T21:35:21.2233333",
            "createBy": "Guest"
        }
    ],
    "educations": [
        {
            "id": 1,
            "agenID": 1,
            "strata": "Bachelor",
            "institution": "UGM",
            "major": "Electrical Engineer",
            "gpa": "3.76",
            "startDate": "2017-08-05T00:00:00",
            "endDate": "2021-11-21T00:00:00",
            "createDate": "2023-12-23T21:35:42.9866667",
            "createBy": "Guest"
        },
        {
            "id": 2,
            "agenID": 1,
            "strata": "Bachelor",
            "institution": "UGM",
            "major": "Electrical Engineer",
            "gpa": "3.76",
            "startDate": "2017-08-05T00:00:00",
            "endDate": "2021-11-21T00:00:00",
            "createDate": "2023-12-23T21:35:42.9866667",
            "createBy": "Guest"
        }
    ]
}

export const AgenDetailWrapperStyle = {
    px: {xs:"1rem", md:"2rem"},
    py: "1rem",
    backgroundColor: "white",
    gap: "3rem"
}

export const TitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '24px',
    letterSpacing: '0em',
    color: 'text.gray2',            
  }

export const DescStyle = {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0em',
    color: 'text.gray3',            
  }

  export const DescTitleStyle = {
    fontSize: '16px',
    fontWeight: {xs:'600', sm:'500'},
    letterSpacing: '0em',
    color: 'text.gray3',     
    width:'100%',
    maxWidth: {xs:'none', sm:'130px'}       
  }

  export const ListTitleStyle = {
    fontSize: '16px',
    fontWeight: "600",
    letterSpacing: '0em',
    color: 'text.gray2',     
    mb: "1rem"    
  }

  export const DescContactStyle = {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0em',
    color: 'text.gray3',   
    maxWidth: {xs:'calc(100% - 20px);', sm:'none'},    
    wordWrap: 'break-word'
  }

  export const AttachmentListStyle = {
    width: '100%',
    maxWidth: "250px",
    whiteSpace: "initial",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline : '1rem',
    paddingBlock : '8px',
  }

  export const ListWrapperStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem'
  }