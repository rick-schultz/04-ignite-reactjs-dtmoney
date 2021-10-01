import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
     <button
     type="button"
     onClick={onRequestClose}
     className="react-modal-close"
     ><img src={closeImg} alt="close modal" /></button>
     <Container>
       <h2>New Transaction</h2>
       <input
       type="text"
       placeholder="Title"
       />

       <input
       type="number"
       placeholder="Amount"
       />

      <TransactionTypeContainer>
        <button
        type="button"
        >
          <img src={incomeImg} alt="income" />
          <span>Income</span>
        </button>
        <button
        type="button"
        >
          <img src={outcomeImg} alt="outcome" />
          <span>Outcome</span>
        </button>
      </TransactionTypeContainer>

       <input
       type="text"
       placeholder="Category"
       />

       <button type="submit">Register</button>
     </Container>
  </Modal>
  )
}
