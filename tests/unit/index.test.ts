import * as voucherServices from '../../src/services/voucherService'
import supertest from 'supertest'
describe('Voucher', ()=>{
    it('vouchers devem ser criados com duas informações: um código alfanumérico (letras e números) e o valor em porcentagem de desconto.  O valor precisa estar entre 1 e 100', async()=>{
        const codigo = 'a4s5d6f8';
        const value = 80;

        const result = await voucherServices.createVoucher(codigo, value)

        expect(result).toEqual({})
    })
})