'use client'

import { BiX } from 'react-icons/bi'
import Modal from '../layout/Modal'
import CriarOrdemServico from './CriarOrdemServico'

interface OrdemServicoModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const OrdemServicoModal: React.FC<OrdemServicoModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-base-100 card border border-base-300 max-w-5xl w-full p-4 m-2 cursor-default overflow-y-auto max-h-[80vh]"
      >
        <div className="flex justify-between px-1 items-center">
          <p className="font-semibold text-lg">Criar Ordem de Serviço</p>
          <button
            onClick={() => {
              setIsOpen(false)
            }}
            className="btn btn-ghost btn-circle btn-sm"
          >
            <BiX size={24} />
          </button>
        </div>
        <div className="mt-4">
          <CriarOrdemServico />
        </div>
      </div>
    </Modal>
  )
}

export default OrdemServicoModal
