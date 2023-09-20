import { Container, Typography } from "@mui/material";
import { Button } from "@mui/joy";
import {TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { useState, useContext } from "react";
import { UserContext } from "../../Context";

const Login = () => {
    const navigate = useNavigate(),
        {login} = useContext(UserContext)
    const [usuario, setUsuario] = useState({
            value: "",
            valid: null
        }),
        [password, setPassword] = useState({
            value: "",
            valid: null
        })

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!usuario.valid && !password.valid){
            //setUser({user: usuario})
            login({user:null, loggedIn: false})
        }
        login({user: usuario.value, loggedIn: true})
        navigate('/');
    },
    validarUsuario = (usuario) => {
        if(usuario.length < 10)
            return false
        return true
    },
    validarPassword = (password) => {
        if(password.length <= 6)
            return false
        else if(password.length >= 7)
            return true
    }

    return(
        <Container maxWidth="100%" sx={{m: 0, padding: '2rem 1rem', background: '#F9F9F9'}}>
            <Typography level="h1" align="center" sx={{color: "#242424", fontWeight: 700}}>Iniciar Sesión</Typography>
            <form onSubmit={handleSubmit}  sx={{margin: '0 5vw'}}>
                <TextField
                    label="Usuario"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    error={usuario.valid === false}
                    helperText={usuario.valid === false && "Verifique el usuario"}
                    value={usuario.value}
                    onChange={(e) => setUsuario({value: e.target.value, valid: true})}
                    onBlur={(e) => setUsuario({value: usuario.value, valid: validarUsuario(e.target.value)})}
                />
                <TextField
                    label="Contraseña"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    type="password"
                    value={password.value}
                    error={password.valid === false}
                    helperText={password.valid === false && "Verifique la contraseña"}
                    onChange={(e) => {
                        setPassword({value: e.target.value, valid: true})
                    }}
                    onBlur={(e) => setPassword({value: password.value, valid: validarPassword(e.target.value)})}
                />
                <Button
                    startDecorator={<LoginIcon />}
                    color="success"
                    type="submit"
                    >Ingresar</Button>
            </form>
        </Container>
    )
}

export default Login;