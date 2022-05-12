// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
    container: {
        padding : '0 5%',
        width: '100%',
        height: '0px',
        margin: 0,
        fontFamily: 'Poppins, sans-serif',
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '60vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white'
    },
    infoCard: {
        display: 'flex',
        fontFamily: 'Poppins, sans-serif',
        flexDirection: "column",
        textAlign: "center"
    },
    // .MuiTypography-h6: {
    //     fontFamily: 'Poppins, sans-serif'
    //   }
});

