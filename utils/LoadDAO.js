"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccessDAO_1 = require("./../app/repos/AccessDAO");
var AddressDAO_1 = require("./../app/repos/AddressDAO");
var AppDataDAO_1 = require("./../app/repos/AppDataDAO");
var AppLangDAO_1 = require("./../app/repos/AppLangDAO");
var AreaMasterDAO_1 = require("./../app/repos/AreaMasterDAO");
var BaseSizeColorsDAO_1 = require("./../app/repos/BaseSizeColorsDAO");
var BaseSizesDAO_1 = require("./../app/repos/BaseSizesDAO");
var BasesMastersDAO_1 = require("./../app/repos/BasesMastersDAO");
var BranchDAO_1 = require("./../app/repos/BranchDAO");
var CatalogueMasterDAO_1 = require("./../app/repos/CatalogueMasterDAO");
var ColorMasterDAO_1 = require("./../app/repos/ColorMasterDAO");
var CountryMasterDAO_1 = require("./../app/repos/CountryMasterDAO");
var DatabaseMasterDAO_1 = require("./../app/repos/DatabaseMasterDAO");
var DealerDAO_1 = require("./../app/repos/DealerDAO");
var DispenseLogDAO_1 = require("../app/repos/DispenseLogDAO");
var FileDataDAO_1 = require("./../app/repos/FileDataDAO");
var FileDataSrcDAO_1 = require("./../app/repos/FileDataSrcDAO");
var MenuAccessDAO_1 = require("./../app/repos/MenuAccessDAO");
var MenuLinkDAO_1 = require("./../app/repos/MenuLinkDAO");
var MenuRoleDAO_1 = require("./../app/repos/MenuRoleDAO");
var PigmentDAO_1 = require("./../app/repos/PigmentDAO");
var PigmentSetDAO_1 = require("./../app/repos/PigmentSetDAO");
var ProductAttributeDAO_1 = require("./../app/repos/ProductAttributeDAO");
var ProductMasterDAO_1 = require("./../app/repos/ProductMasterDAO");
var ProfileDAO_1 = require("./../app/repos/ProfileDAO");
var ProfileDocsDAO_1 = require("./../app/repos/ProfileDocsDAO");
var ShadePastingDAO_1 = require("./../app/repos/ShadePastingDAO");
var SizeMasterDAO_1 = require("./../app/repos/SizeMasterDAO");
var TechnicianDAO_1 = require("./../app/repos/TechnicianDAO");
var TintingMachineDAO_1 = require("./../app/repos/TintingMachineDAO");
var TranslationDAO_1 = require("./../app/repos/TranslationDAO");
var UserDAO_1 = require("./../app/repos/UserDAO");
var VendorDAO_1 = require("./../app/repos/VendorDAO");
exports.DAOList = {
    access_data: new AccessDAO_1.AccessDAO(),
    address: new AddressDAO_1.AddressDAO(),
    app_data: new AppDataDAO_1.AppDataDAO(),
    app_lang: new AppLangDAO_1.AppLangDAO(),
    area_master: new AreaMasterDAO_1.AreaMasterDAO(),
    base_size_colors: new BaseSizeColorsDAO_1.BaseSizeColorsDAO(),
    base_sizes: new BaseSizesDAO_1.BaseSizesDAO(),
    bases: new BasesMastersDAO_1.BasesMastersDAO(),
    branch: new BranchDAO_1.BranchDAO(),
    catalogue_master: new CatalogueMasterDAO_1.CatalogueMasterDAO(),
    colors: new ColorMasterDAO_1.ColorMasterDAO(),
    country_master: new CountryMasterDAO_1.CountryMasterDAO(),
    database_master: new DatabaseMasterDAO_1.DatabaseMasterDAO(),
    dealer: new DealerDAO_1.DealerDAO(),
    dispense_log: new DispenseLogDAO_1.DispenseLogDAO(),
    file_data: new FileDataDAO_1.FileDataDAO(),
    file_data_src: new FileDataSrcDAO_1.FileDataSrcDAO(),
    menu_access: new MenuAccessDAO_1.MenuAccessDAO(),
    menu_link: new MenuLinkDAO_1.MenuLinkDAO(),
    menu_role: new MenuRoleDAO_1.MenuRoleDAO(),
    pigment: new PigmentDAO_1.PigmentDAO(),
    pigment_set: new PigmentSetDAO_1.PigmentSetDAO(),
    product_attribute: new ProductAttributeDAO_1.ProductAttributeDAO(),
    products: new ProductMasterDAO_1.ProductMasterDAO(),
    profile: new ProfileDAO_1.ProfileDAO(),
    profile_docs: new ProfileDocsDAO_1.ProfileDocsDAO(),
    shade_pasting: new ShadePastingDAO_1.ShadePastingDAO(),
    sizes: new SizeMasterDAO_1.SizeMasterDAO(),
    // selected_lines:new Selectedli
    technician: new TechnicianDAO_1.TechnicianDAO(),
    tinting_machine: new TintingMachineDAO_1.TintingMachineDAO(),
    translation: new TranslationDAO_1.TranslationDAO(),
    user: new UserDAO_1.UserDAO(),
    vendor: new VendorDAO_1.VendorDAO(),
};
