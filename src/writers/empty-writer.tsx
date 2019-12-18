import IWriter from '../interfaces/writer';
export default class EmptyWriter implements IWriter {
    write(): String {
        return 'foo';
    }
}
