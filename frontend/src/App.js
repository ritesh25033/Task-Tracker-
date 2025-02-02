import { ThemeProvider, createTheme, CssBaseline, Container, Paper, Typography } from "@mui/material"
import TodoList from "./components/TodoList"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Todo List
          </Typography>
          <TodoList />
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default App

