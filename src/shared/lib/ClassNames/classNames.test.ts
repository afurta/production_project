import { classNames } from './classNames'


describe('ClassNames function', ()=>{

  it('Initial state', ()=>{
    expect(classNames('example', {}, [])).toBe('example')
  })

  it('Mod params', ()=>{
    expect(classNames('example', {mod1: true, mod2: false}, [])).toBe('example mod1')
    expect(classNames('example', {mod1: true, mod2: false}, [])).not.toBe('mod2')
  })

  it('Additional params', ()=>{
    expect(classNames('example', {}, ['example2'])).toBe('example example2')
  })
  
})
