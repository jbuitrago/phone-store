import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
/*routes*/
import ROUTES from '../../utils/routes'
import Home from '../Home'
import NotFound from '../NotFound'
import ProductDetail from '../Products/detail'

const theme = createTheme()

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>
                {/* Container */}
                <Container sx={{ py: 2 }} maxWidth="md">
                    <BrowserRouter>
                        <Routes>
                            <Route
                                exact
                                path={ROUTES.HOME}
                                element={<Home />}
                            />
                            <Route
                                path={`${ROUTES.PRODUCT_DETAIL}/:id`}
                                element={<ProductDetail />}
                            />
                            <Route path={'*'} element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </Container>
                {/*Container */}
            </main>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </ThemeProvider>
    )
}

export default App
