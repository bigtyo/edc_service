ALTER TABLE `edc_service`.`customer` ADD COLUMN `idkartu` VARCHAR(20) NOT NULL  AFTER `Alamat` , ADD COLUMN `pin` VARCHAR(6) NOT NULL  AFTER `idkartu` ;

UPDATE `edc_service`.`customer` SET `idkartu`='5647218233334444555', `pin`='123412' WHERE `idcustomer`='1';

UPDATE `edc_service`.`customer` SET `idkartu`='5647218233334444666', `pin`='345621' WHERE `idcustomer`='2';

