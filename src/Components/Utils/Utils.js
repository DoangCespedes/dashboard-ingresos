import Check from "@mui/icons-material/Check"
import PauseIcon from "@mui/icons-material/Pause"
import CloseIcon from "@mui/icons-material/Close"



const TOKEN_KEY = 'ASG_TOKEN';
const PROFILE_KEY = 'PROFILE';
const windowGlobal = typeof window !== 'undefined' && window;

const currencyValues = [
  { value: "DL", label: "Dólares Americanos", symbol: "$" },
  { value: "BS", label: "Bolívares", symbol: "Bs." },
  { value: "EU", label: "Euros", symbol: "€" },
]

function getIdentificationCustomer(tipoid, numid) {
    const arrIdent = [null, null, null]
    if (tipoid !== "undefined" && tipoid !== "null") {
      arrIdent[0] = tipoid
      if (numid !== "undefined" && numid !== "null") {
        if (numid.length > 1) {
          if (tipoid === "J" || tipoid === "G") {
            arrIdent[1] = numid.substring(0, numid.length - 1)
            arrIdent[2] = numid.substring(numid.length - 1)
          } else {
            arrIdent[1] = numid
            arrIdent[2] = null
          }
        } else {
          arrIdent[1] = numid.length === 1 ? numid : null
        }
      }
    } else if (numid !== "undefined" && numid !== "null") {
      arrIdent[1] = numid
    }
    return arrIdent
  }

const indentificationTypeCliente = [
    { value: "V", label: "Venezolano" },
    { value: "J", label: "Jurídico" },
    { value: "E", label: "Extranjero" },
    { value: "P", label: "Pasaporte" },
    { value: "G", label: "Gubernamental" },
    { value: "M", label: "Menor sin Cédula" },
  ]

  function distinctArray(array, id, name) {
    const result = []
    const map = new Map()
    for (const reg of array) {
      if (!map.has(reg[id])) {
        map.set(reg[id], true)
        result.push({
          id: reg[id],
          name: reg[name],
        })
      }
    }
    return result
  }
  function getSymbolCurrency(value) {
    let out = value
    currencyValues.forEach((item) => {
      if (item.value === value) {
        out = item.symbol
      }
    })
    return out
  }

  const formatAmount = (amount) =>
  new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2 }).format(amount)

  function setProfile(profile) {
    if (windowGlobal) return sessionStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
  }
  function setToken(token) {
    if (windowGlobal) sessionStorage.setItem(TOKEN_KEY, token)
  }
  
  const VerifyNullUndefinedValue = (value) => {
    const Newvalue = value ?? '-'
    return Newvalue
 }
 const statusRequerimentPending = {
  N: { title: "Entregados", color: "rgb(76, 175, 80)" },
  NA:  { title: "Entregados", color: "rgb(76, 175, 80)" },
  S: { title: "Pendientes", color: "rgb(255, 152, 0)" },
}

const statusPayColors = {
  Anulada: { color: "rgb(255, 152, 0)", icon: CloseIcon },
  Pagada: { color: "rgb(76, 175, 80)", icon: Check },
  Cobrada: { color: "rgb(76, 175, 80)", icon: Check },
  Pendiente: { color: "rgb(255, 152, 0)", icon: PauseIcon },
}
export {
  statusPayColors,statusRequerimentPending,VerifyNullUndefinedValue,currencyValues,distinctArray,setToken,setProfile,getIdentificationCustomer,indentificationTypeCliente,getSymbolCurrency,formatAmount
}