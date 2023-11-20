import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Switch,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Navigation } from "./routes"
import { NavBar } from "./components/NavBar"
import { ListCats } from "./pages/ListCats"
import { UploadCat } from "./pages/UploadCat"

export const App = () => {

  return (
  <ChakraProvider theme={theme}>
    <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListCats />} />
          <Route path='/upload' element={<UploadCat />} />
        </Routes>
      </BrowserRouter>

  </ChakraProvider>
)
  }
