import { MapPinIcon, QrCodeIcon, TicketIcon } from 'lucide-react-native'

export const welcomeSteps = [
  {
    id: '1',
    icon: MapPinIcon,
    title: 'Encontre estabelecimentos',
    description: 'Veja locais perto de você que são parceiros Nearby',
  },
  {
    id: '2',
    icon: QrCodeIcon,
    title: 'Ative o cupom com QR Code',
    description: 'Escaneie o código no estabelecimento para usar o benefício',
  },
  {
    id: '3',
    icon: TicketIcon,
    title: 'Garanta vantagens perto de você',
    description:
      'Ative cupons onde estiver, em diferentes tipos de estabelecimento ',
  },
]
